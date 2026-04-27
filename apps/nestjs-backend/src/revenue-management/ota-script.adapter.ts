import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {Injectable} from '@nestjs/common';
import {type CompetitorPrice} from '@next-nest-turbo-auth-boilerplate/shared';

const execFileAsync = promisify(execFile);

@Injectable()
export class OtaScriptAdapter {
  async fetchCompetitorPrices(input: {
    hotelName: string;
    roomTypeName: string;
    checkInDate: string;
    checkOutDate: string;
  }): Promise<CompetitorPrice[]> {
    const scriptCwd = process.env.OTA_SCRIPT_CWD;
    const provider = process.env.OTA_PROVIDER ?? 'elong';

    if (!scriptCwd) {
      throw new Error('OTA script adapter is not configured');
    }

    const {stdout} = await execFileAsync(
      'node',
      ['dist/index.js', 'search-hotels', provider, input.hotelName, input.checkInDate, input.checkOutDate],
      {
        cwd: scriptCwd,
        timeout: 15_000,
        maxBuffer: 1024 * 1024,
      },
    );

    return parseCompetitorPrices(stdout, input.roomTypeName);
  }
}

function parseCompetitorPrices(output: string, roomTypeName: string): CompetitorPrice[] {
  const parsed = JSON.parse(output) as unknown;
  if (!Array.isArray(parsed)) {
    throw new TypeError('Unexpected OTA script output format');
  }

  const capturedAt = new Date().toISOString();

  return parsed.flatMap(entry => {
    if (!isRecord(entry)) {
      return [];
    }

    const hotelName = getStringField(entry, ['hotelName', 'name', 'hotel']);
    const price = getNumberField(entry, ['price', 'currentPrice', 'memberPrice']);
    if (!hotelName || price === undefined) {
      return [];
    }

    return [
      {
        hotelName,
        roomTypeName,
        channel: getStringField(entry, ['channel']) ?? 'elong',
        price,
        capturedAt,
        source: 'live' as const,
      },
    ];
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function getStringField(entry: Record<string, unknown>, fields: string[]): string | undefined {
  for (const field of fields) {
    const value = entry[field];
    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }
  }

  return undefined;
}

function getNumberField(entry: Record<string, unknown>, fields: string[]): number | undefined {
  for (const field of fields) {
    const value = entry[field];
    if (typeof value === 'number' && Number.isFinite(value)) {
      return value;
    }

    if (typeof value === 'string' && value.trim()) {
      const parsed = Number(value.replaceAll(/[^\d.]/gu, ''));
      if (Number.isFinite(parsed)) {
        return parsed;
      }
    }
  }

  return undefined;
}
