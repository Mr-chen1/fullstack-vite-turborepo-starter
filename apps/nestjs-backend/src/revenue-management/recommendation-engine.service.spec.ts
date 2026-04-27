import {RecommendationEngineService} from './recommendation-engine.service';

describe('RecommendationEngineService', () => {
  const service = new RecommendationEngineService();

  it('raises the suggested price when competitor average is higher and inventory is tight', () => {
    const recommendation = service.generate({
      currentPrice: 398,
      unsoldRooms: 4,
      competitors: [
        {
          hotelName: '广州科学城美居酒店',
          roomTypeName: '高级双床房',
          channel: 'elong',
          price: 428,
          capturedAt: '2026-04-27T12:00:00.000Z',
          source: 'mock',
        },
        {
          hotelName: '广州萝岗万达美华酒店',
          roomTypeName: '豪华大床房',
          channel: 'elong',
          price: 418,
          capturedAt: '2026-04-27T12:00:00.000Z',
          source: 'mock',
        },
      ],
    });

    expect(recommendation.currentPrice).toBe(398);
    expect(recommendation.suggestedPrice).toBe(418);
    expect(recommendation.reason).toContain('竞品均价');
    expect(recommendation.reason).toContain('库存仅剩 4 间');
  });

  it('keeps the suggestion conservative when inventory is high', () => {
    const recommendation = service.generate({
      currentPrice: 398,
      unsoldRooms: 12,
      competitors: [
        {
          hotelName: '广州科学城美居酒店',
          roomTypeName: '高级双床房',
          channel: 'elong',
          price: 405,
          capturedAt: '2026-04-27T12:00:00.000Z',
          source: 'mock',
        },
      ],
    });

    expect(recommendation.suggestedPrice).toBe(402);
    expect(recommendation.reason).toContain('未售房量较高');
  });
});
