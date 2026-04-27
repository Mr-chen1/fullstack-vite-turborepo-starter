import {Injectable, NotFoundException} from '@nestjs/common';
import {
  type CompetitorPrice,
  type HotelSummary,
  type RecommendationSummary,
  type RoomTypeDetail,
} from '@next-nest-turbo-auth-boilerplate/shared';
import {
  PrismaService,
  type PricingRecommendation,
  type RecommendationDecisionStatus,
} from '@next-nest-turbo-auth-boilerplate/db';

function mapDecisionStatus(status: RecommendationDecisionStatus): 'pending' | 'accepted' | 'rejected' {
  if (status === 'ACCEPTED') {
    return 'accepted';
  }

  if (status === 'REJECTED') {
    return 'rejected';
  }

  return 'pending';
}

function mapRecommendation(recommendation: Pick<
  PricingRecommendation,
  'id' | 'currentPrice' | 'suggestedPrice' | 'unsoldRooms' | 'reason' | 'competitorData' | 'decisionStatus' | 'createdAt' | 'decidedAt'
>): RecommendationSummary {
  return {
    id: recommendation.id,
    currentPrice: recommendation.currentPrice,
    suggestedPrice: recommendation.suggestedPrice,
    unsoldRooms: recommendation.unsoldRooms,
    reason: recommendation.reason,
    decisionStatus: mapDecisionStatus(recommendation.decisionStatus),
    createdAt: recommendation.createdAt.toISOString(),
    decidedAt: recommendation.decidedAt?.toISOString(),
    competitors: recommendation.competitorData as unknown as CompetitorPrice[],
  };
}

@Injectable()
export class RevenueCatalogService {
  constructor(private readonly prisma: PrismaService) {}

  async listHotels(): Promise<HotelSummary[]> {
    const hotels = await this.prisma.hotel.findMany({
      include: {
        roomTypes: {
          include: {
            recommendations: {
              orderBy: {createdAt: 'desc'},
              take: 1,
            },
          },
        },
      },
      orderBy: [{district: 'asc'}, {name: 'asc'}],
    });

    return hotels.map((hotel) => ({
      id: hotel.id,
      name: hotel.name,
      district: hotel.district,
      roomTypes: hotel.roomTypes.map((roomType) => ({
        id: roomType.id,
        name: roomType.name,
        currentPrice: roomType.currentPrice,
        unsoldRooms: roomType.unsoldRooms,
        latestDecisionStatus: roomType.recommendations[0]
          ? mapDecisionStatus(roomType.recommendations[0].decisionStatus)
          : 'idle',
      })),
    }));
  }

  async getRoomTypeDetail(hotelId: string, roomTypeId: string): Promise<RoomTypeDetail> {
    const roomType = await this.prisma.roomType.findUnique({
      where: {id: roomTypeId},
      include: {
        hotel: true,
        recommendations: {
          orderBy: {createdAt: 'desc'},
          take: 1,
        },
      },
    });

    if (!roomType || roomType.hotelId !== hotelId) {
      throw new NotFoundException('Room type not found');
    }

    return {
      id: roomType.id,
      hotelId: roomType.hotelId,
      hotelName: roomType.hotel.name,
      roomTypeName: roomType.name,
      currentPrice: roomType.currentPrice,
      unsoldRooms: roomType.unsoldRooms,
      latestRecommendation: roomType.recommendations[0] ? mapRecommendation(roomType.recommendations[0]) : null,
    };
  }

  async listRecommendationHistory(hotelId: string, roomTypeId: string): Promise<RecommendationSummary[]> {
    const recommendations = await this.prisma.pricingRecommendation.findMany({
      where: {hotelId, roomTypeId},
      orderBy: {createdAt: 'desc'},
    });

    return recommendations.map((recommendation) => mapRecommendation(recommendation));
  }
}
