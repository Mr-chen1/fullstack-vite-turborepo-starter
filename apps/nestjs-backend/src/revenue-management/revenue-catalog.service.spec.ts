import {type PrismaService} from '@next-nest-turbo-auth-boilerplate/db';
import {RevenueCatalogService} from './revenue-catalog.service';

describe('RevenueCatalogService', () => {
  const prisma = {
    hotel: {findMany: jest.fn()},
    roomType: {findUnique: jest.fn()},
    pricingRecommendation: {findMany: jest.fn()},
  } as unknown as PrismaService;

  const service = new RevenueCatalogService(prisma);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns hotel list entries with latest room-type decision state', async () => {
    jest.mocked(prisma.hotel.findMany).mockResolvedValue([
      {
        id: 'hotel-1',
        name: '广州黄埔智选酒店',
        district: '黄埔区',
        roomTypes: [
          {
            id: 'room-1',
            name: '高级大床房',
            currentPrice: 398,
            unsoldRooms: 8,
            recommendations: [{decisionStatus: 'ACCEPTED'}],
          },
        ],
      },
    ] as never[]);

    await expect(service.listHotels()).resolves.toEqual([
      expect.objectContaining({
        name: '广州黄埔智选酒店',
        roomTypes: [expect.objectContaining({latestDecisionStatus: 'accepted'})],
      }),
    ]);
  });

  it('loads one room type detail and latest recommendation summary', async () => {
    jest.mocked(prisma.roomType.findUnique).mockResolvedValue({
      id: 'room-1',
      hotelId: 'hotel-1',
      name: '高级大床房',
      currentPrice: 398,
      unsoldRooms: 8,
      hotel: {
        id: 'hotel-1',
        name: '广州黄埔智选酒店',
      },
      recommendations: [
        {
          id: 'rec-1',
          currentPrice: 398,
          suggestedPrice: 418,
          unsoldRooms: 8,
          reason: '竞品均价更高',
          competitorData: [] as never[],
          decisionStatus: 'PENDING',
          createdAt: new Date('2026-04-27T06:40:00.000Z'),
          decidedAt: null,
        },
      ],
    } as never);

    const detail = await service.getRoomTypeDetail('hotel-1', 'room-1');

    expect(detail.hotelName).toBe('广州黄埔智选酒店');
    expect(detail.roomTypeName).toBe('高级大床房');
    expect(detail.latestRecommendation).toMatchObject({
      id: 'rec-1',
      decisionStatus: 'pending',
    });
  });

  it('returns recommendation history rows newest-first', async () => {
    jest.mocked(prisma.pricingRecommendation.findMany).mockResolvedValue([
      {
        id: 'rec-1',
        currentPrice: 398,
        suggestedPrice: 418,
        unsoldRooms: 8,
        reason: '竞品均价更高',
        competitorData: [] as never[],
        decisionStatus: 'ACCEPTED',
        createdAt: new Date('2026-04-27T06:40:00.000Z'),
        decidedAt: new Date('2026-04-27T06:45:00.000Z'),
      },
    ] as never[]);

    await expect(service.listRecommendationHistory('hotel-1', 'room-1')).resolves.toEqual([
      expect.objectContaining({
        id: 'rec-1',
        decisionStatus: 'accepted',
      }),
    ]);
  });
});
