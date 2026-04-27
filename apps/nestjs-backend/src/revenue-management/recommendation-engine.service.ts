import {Injectable} from '@nestjs/common';
import {type CompetitorPrice} from '@next-nest-turbo-auth-boilerplate/shared';

@Injectable()
export class RecommendationEngineService {
  generate(input: {
    currentPrice: number;
    unsoldRooms: number;
    competitors: CompetitorPrice[];
  }): {
      currentPrice: number;
      suggestedPrice: number;
      unsoldRooms: number;
      reason: string;
      competitors: CompetitorPrice[];
    } {
    const averagePrice = Math.round(
      input.competitors.reduce((sum, competitor) => sum + competitor.price, 0) / Math.max(input.competitors.length, 1),
    );
    const gap = averagePrice - input.currentPrice;
    const inventoryMultiplier = input.unsoldRooms <= 5 ? 0.8 : input.unsoldRooms <= 8 ? 0.6 : 0.5;
    const rawAdjustment = Math.round((gap * inventoryMultiplier) / 2) * 2;
    const boundedAdjustment = Math.max(-20, Math.min(20, rawAdjustment));
    const suggestedPrice = Math.max(1, input.currentPrice + boundedAdjustment);
    const inventoryReason =
      input.unsoldRooms <= 5
        ? `库存仅剩 ${input.unsoldRooms} 间，可适度提价以放大收益。`
        : `未售房量较高（${input.unsoldRooms} 间），建议温和调整避免影响转化。`;

    return {
      currentPrice: input.currentPrice,
      suggestedPrice,
      unsoldRooms: input.unsoldRooms,
      reason: `竞品均价约 ¥${averagePrice}，当前售价 ¥${input.currentPrice}。${inventoryReason}`,
      competitors: input.competitors,
    };
  }
}
