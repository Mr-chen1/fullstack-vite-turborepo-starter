import path from 'node:path';
import process from 'node:process';
import {config} from 'dotenv';
import {PrismaClient} from '@prisma/client';
import {hashSync} from 'bcryptjs';

config({
  path: path.resolve(process.cwd(), '../../.env'),
});

const prisma = new PrismaClient();
const saltRounds = 12;

async function main(): Promise<void> {
  await prisma.user.upsert({
    where: {email: 'admin@example.com'},
    update: {},
    create: {
      email: 'admin@example.com',
      passwordHash: hashSync('Admin@12345', saltRounds),
      role: 'ADMIN',
    },
  });

  const hotels = [
    {
      id: '8a2f5f0a-e511-4a4b-a3ef-320f4f9f4c80',
      name: '广州黄埔智选酒店',
      district: '黄埔区',
      roomType: {
        id: '6a472bb5-c692-4693-b17e-f87c0d7c8d9f',
        name: '高级大床房',
        currentPrice: 398,
        unsoldRooms: 8,
      },
    },
    {
      id: 'ca8c7c8d-1f48-4d69-b0f2-77b5da618774',
      name: '广州科学城美居酒店',
      district: '黄埔区',
      roomType: {
        id: 'be9d5ee2-d27d-4fbe-8326-c562cb176f33',
        name: '高级双床房',
        currentPrice: 428,
        unsoldRooms: 5,
      },
    },
    {
      id: '4a4feb2a-935e-4dac-b2cb-8c15fc9d67eb',
      name: '广州萝岗万达美华酒店',
      district: '黄埔区',
      roomType: {
        id: '9e0e8d71-a2fb-4f10-a5af-055b82853453',
        name: '豪华大床房',
        currentPrice: 418,
        unsoldRooms: 6,
      },
    },
  ] as const;

  for (const hotel of hotels) {
    await prisma.hotel.upsert({
      where: {id: hotel.id},
      update: {
        name: hotel.name,
        district: hotel.district,
      },
      create: {
        id: hotel.id,
        name: hotel.name,
        district: hotel.district,
      },
    });

    await prisma.roomType.upsert({
      where: {id: hotel.roomType.id},
      update: {
        hotelId: hotel.id,
        name: hotel.roomType.name,
        currentPrice: hotel.roomType.currentPrice,
        unsoldRooms: hotel.roomType.unsoldRooms,
      },
      create: {
        id: hotel.roomType.id,
        hotelId: hotel.id,
        name: hotel.roomType.name,
        currentPrice: hotel.roomType.currentPrice,
        unsoldRooms: hotel.roomType.unsoldRooms,
      },
    });
  }

  console.log('Seed completed.');
}

main()
  .catch((error: unknown) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async (): Promise<void> => {
    await prisma.$disconnect();
  });
