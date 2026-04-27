# Hotel Revenue Agent Console Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a multi-hotel revenue management console demo with a NestJS-backed monitoring job flow, live OTA script attempt with mock fallback, Prisma-persisted recommendation history, and a React console UI for review and decision making.

**Architecture:** Extend the existing monorepo by adding a `revenue-management` backend module, shared DTO/domain contracts, Prisma persistence for hotel catalog and recommendation history, and a Vite console page composed from focused revenue-management features. Monitoring jobs stay in memory for v1, but their outputs and decisions persist through Prisma so the UI can refresh safely while still showing a believable Agent workflow.

**Tech Stack:** React 19, React Router, TanStack Query, NestJS 11, Prisma/PostgreSQL, class-validator DTOs, Jest, Vitest, Playwright, Tailwind CSS 4, existing axios/query/provider infrastructure.

---

## File Structure

### Create

- `packages/shared/src/types/revenue-management.types.ts`
- `packages/shared/src/dtos/revenue-management/create-monitoring-job.dto.ts`
- `packages/shared/src/dtos/revenue-management/recommendation-decision.dto.ts`
- `packages/db/prisma/migrations/20260427153000_add_revenue_management/migration.sql`
- `apps/nestjs-backend/src/revenue-management/revenue-management.module.ts`
- `apps/nestjs-backend/src/revenue-management/revenue-management.controller.ts`
- `apps/nestjs-backend/src/revenue-management/revenue-catalog.service.ts`
- `apps/nestjs-backend/src/revenue-management/monitoring-jobs.service.ts`
- `apps/nestjs-backend/src/revenue-management/recommendation-engine.service.ts`
- `apps/nestjs-backend/src/revenue-management/ota-script.adapter.ts`
- `apps/nestjs-backend/src/revenue-management/ota-mock.adapter.ts`
- `apps/nestjs-backend/src/revenue-management/revenue-management.controller.spec.ts`
- `apps/nestjs-backend/src/revenue-management/revenue-catalog.service.spec.ts`
- `apps/nestjs-backend/src/revenue-management/recommendation-engine.service.spec.ts`
- `apps/nestjs-backend/src/revenue-management/monitoring-jobs.service.spec.ts`
- `apps/vite-frontend/src/api/revenue-management.api.ts`
- `apps/vite-frontend/src/features/revenue-management/query-keys.ts`
- `apps/vite-frontend/src/features/revenue-management/use-revenue-console.ts`
- `apps/vite-frontend/src/features/revenue-management/components/HotelListPanel.tsx`
- `apps/vite-frontend/src/features/revenue-management/components/MonitoringDetailPanel.tsx`
- `apps/vite-frontend/src/features/revenue-management/components/AgentWorkflowPanel.tsx`
- `apps/vite-frontend/src/features/revenue-management/components/RecommendationModal.tsx`
- `apps/vite-frontend/src/features/revenue-management/components/RecommendationHistoryTable.tsx`
- `apps/vite-frontend/src/features/revenue-management/components/RevenueConsoleShell.tsx`
- `apps/vite-frontend/src/features/revenue-management/components/revenue-console-shell.test.tsx`
- `apps/vite-frontend/src/features/revenue-management/components/revenue-monitoring-flow.test.tsx`
- `apps/vite-frontend/src/pages/revenue-management/RevenueManagementConsolePage.tsx`
- `apps/vite-frontend/tests/revenue-management.spec.ts`

### Modify

- `packages/shared/src/index.ts`
- `packages/db/prisma/schema.prisma`
- `packages/db/prisma/seed.ts`
- `packages/db/src/index.ts`
- `apps/nestjs-backend/src/app.module.ts`
- `apps/nestjs-backend/src/config/app.config.ts`
- `apps/nestjs-backend/src/config/config-key.enum.ts`
- `apps/nestjs-backend/src/config/validation.schema.ts`
- `apps/vite-frontend/src/router/index.tsx`
- `apps/vite-frontend/playwright.config.ts`

### Responsibility Notes

- Shared package owns all revenue-management DTOs and serializable UI/API contracts.
- Prisma owns persisted hotel catalog and recommendation history; monitoring jobs intentionally remain backend memory only.
- Backend services split into catalog reads, recommendation calculation, job orchestration, and OTA adapters so live-script concerns stay isolated.
- Frontend feature files split by panel and behavior to keep the console readable and testable.

### Task 1: Add Shared Contracts And Persistence Foundation

**Files:**

- Create: `packages/shared/src/types/revenue-management.types.ts`
- Create: `packages/shared/src/dtos/revenue-management/create-monitoring-job.dto.ts`
- Create: `packages/shared/src/dtos/revenue-management/recommendation-decision.dto.ts`
- Create: `packages/db/prisma/migrations/20260427153000_add_revenue_management/migration.sql`
- Modify: `packages/shared/src/index.ts`
- Modify: `packages/db/prisma/schema.prisma`
- Modify: `packages/db/prisma/seed.ts`
- Modify: `packages/db/src/index.ts`
- Test: `apps/nestjs-backend/src/revenue-management/revenue-management.controller.spec.ts`

- [ ] **Step 1: Write the failing contract export test**

```ts
import {
  CreateMonitoringJobDto,
  RecommendationDecisionDto,
  type MonitoringJobStatus,
} from '@next-nest-turbo-auth-boilerplate/shared';

describe('revenue management shared contract exports', () => {
  it('exports the DTO classes and monitoring status literals', () => {
    const createDto = new CreateMonitoringJobDto();
    createDto.hotelId = 'hotel-gz-hp';
    createDto.roomTypeId = 'room-deluxe-king';

    const decisionDto = new RecommendationDecisionDto();
    decisionDto.decision = 'accepted';

    const status: MonitoringJobStatus = 'waiting_confirmation';

    expect(createDto).toEqual({
      hotelId: 'hotel-gz-hp',
      roomTypeId: 'room-deluxe-king',
    });
    expect(decisionDto.decision).toBe('accepted');
    expect(status).toBe('waiting_confirmation');
  });
});
```

- [ ] **Step 2: Run the targeted backend unit test to verify it fails**

Run: `npm --prefix apps/nestjs-backend run test:unit -- --runTestsByPath src/revenue-management/revenue-management.controller.spec.ts`  
Expected: FAIL with missing shared exports for revenue-management DTOs/types.

- [ ] **Step 3: Add the shared DTOs, types, Prisma models, and demo seed data**

`packages/shared/src/types/revenue-management.types.ts`

```ts
export type MonitoringJobStatus = 'queued' | 'running' | 'waiting_confirmation' | 'completed' | 'failed';
export type MonitoringJobStepKey =
  | 'check_inventory'
  | 'fetch_competitor_prices'
  | 'calculate_market_average'
  | 'generate_recommendation'
  | 'waiting_user_confirmation';
export type MonitoringJobStepStatus = 'pending' | 'running' | 'done' | 'failed' | 'fallback';
export type RecommendationDecision = 'accepted' | 'rejected';

export interface CompetitorPrice {
  hotelName: string;
  roomTypeName: string;
  channel: string;
  price: number;
  capturedAt: string;
  source: 'live' | 'mock';
}

export interface RoomTypeSummary {
  id: string;
  name: string;
  currentPrice: number;
  unsoldRooms: number;
  latestDecisionStatus: 'pending' | 'accepted' | 'rejected' | 'idle';
}

export interface HotelSummary {
  id: string;
  name: string;
  district: string;
  roomTypes: RoomTypeSummary[];
}

export interface MonitoringJobStep {
  key: MonitoringJobStepKey;
  status: MonitoringJobStepStatus;
  message: string;
  source: 'live' | 'mock' | 'system';
  startedAt?: string;
  completedAt?: string;
}
```

`packages/shared/src/dtos/revenue-management/create-monitoring-job.dto.ts`

```ts
import {ApiProperty} from '@nestjs/swagger';
import {IsString, IsUUID} from 'class-validator';

export class CreateMonitoringJobDto {
  @ApiProperty({example: '8a2f5f0a-e511-4a4b-a3ef-320f4f9f4c80'})
  @IsString()
  @IsUUID()
  hotelId!: string;

  @ApiProperty({example: '6a472bb5-c692-4693-b17e-f87c0d7c8d9f'})
  @IsString()
  @IsUUID()
  roomTypeId!: string;
}
```

`packages/shared/src/dtos/revenue-management/recommendation-decision.dto.ts`

```ts
import {ApiProperty} from '@nestjs/swagger';
import {IsIn} from 'class-validator';

export class RecommendationDecisionDto {
  @ApiProperty({enum: ['accepted', 'rejected']})
  @IsIn(['accepted', 'rejected'])
  decision!: 'accepted' | 'rejected';
}
```

`packages/db/prisma/schema.prisma`

```prisma
model Hotel {
  id         String                 @id @default(uuid()) @db.Uuid
  name       String
  district   String
  createdAt  DateTime               @default(now()) @map("created_at") @db.Timestamp()
  updatedAt  DateTime               @updatedAt @map("updated_at") @db.Timestamp()
  roomTypes  RoomType[]
  recommendations PricingRecommendation[]

  @@map("hotels")
}

model RoomType {
  id              String                 @id @default(uuid()) @db.Uuid
  hotelId         String                 @map("hotel_id") @db.Uuid
  name            String
  currentPrice    Int                    @map("current_price")
  unsoldRooms     Int                    @map("unsold_rooms")
  createdAt       DateTime               @default(now()) @map("created_at") @db.Timestamp()
  updatedAt       DateTime               @updatedAt @map("updated_at") @db.Timestamp()
  hotel           Hotel                  @relation(fields: [hotelId], references: [id], onDelete: Cascade)
  recommendations PricingRecommendation[]

  @@map("room_types")
}

model PricingRecommendation {
  id             String   @id @default(uuid()) @db.Uuid
  hotelId        String   @map("hotel_id") @db.Uuid
  roomTypeId     String   @map("room_type_id") @db.Uuid
  currentPrice   Int      @map("current_price")
  suggestedPrice Int      @map("suggested_price")
  unsoldRooms    Int      @map("unsold_rooms")
  reason         String
  competitorData Json     @map("competitor_data")
  decisionStatus String   @map("decision_status")
  createdAt      DateTime @default(now()) @map("created_at") @db.Timestamp()
  decidedAt      DateTime? @map("decided_at") @db.Timestamp()
  hotel          Hotel    @relation(fields: [hotelId], references: [id], onDelete: Cascade)
  roomType       RoomType @relation(fields: [roomTypeId], references: [id], onDelete: Cascade)

  @@map("pricing_recommendations")
}
```

`packages/db/prisma/seed.ts`

```ts
await prisma.hotel.upsert({
  where: {id: '8a2f5f0a-e511-4a4b-a3ef-320f4f9f4c80'},
  update: {},
  create: {
    id: '8a2f5f0a-e511-4a4b-a3ef-320f4f9f4c80',
    name: '广州黄埔智选酒店',
    district: '黄埔区',
    roomTypes: {
      create: [
        {
          id: '6a472bb5-c692-4693-b17e-f87c0d7c8d9f',
          name: '高级大床房',
          currentPrice: 398,
          unsoldRooms: 8,
        },
      ],
    },
  },
});
```

- [ ] **Step 4: Export the new contracts and Prisma model types**

`packages/shared/src/index.ts`

```ts
export * from './types/revenue-management.types';
export {CreateMonitoringJobDto} from './dtos/revenue-management/create-monitoring-job.dto';
export {RecommendationDecisionDto} from './dtos/revenue-management/recommendation-decision.dto';
```

`packages/db/src/index.ts`

```ts
export type {Hotel, RoomType, PricingRecommendation} from '@prisma/client';
```

- [ ] **Step 5: Run the shared build, backend unit test, migration, and seed**

Run: `npm --prefix packages/shared run build`  
Expected: PASS

Run: `npm --prefix apps/nestjs-backend run test:unit -- --runTestsByPath src/revenue-management/revenue-management.controller.spec.ts`  
Expected: PASS

Run: `npm --prefix packages/db run migrate:dev -- --name add_revenue_management`  
Expected: PASS with a generated Prisma migration and updated client

Run: `npm --prefix packages/db run db:seed`  
Expected: PASS with `Seed completed.`

- [ ] **Step 6: Commit the foundation**

```bash
git add packages/shared/src packages/db/prisma packages/db/src/index.ts apps/nestjs-backend/src/revenue-management/revenue-management.controller.spec.ts
git commit -m "feat(shared): add revenue management contracts"
```

### Task 2: Implement Backend Catalog And History Read APIs

**Files:**

- Create: `apps/nestjs-backend/src/revenue-management/revenue-management.module.ts`
- Create: `apps/nestjs-backend/src/revenue-management/revenue-management.controller.ts`
- Create: `apps/nestjs-backend/src/revenue-management/revenue-catalog.service.ts`
- Create: `apps/nestjs-backend/src/revenue-management/revenue-catalog.service.spec.ts`
- Modify: `apps/nestjs-backend/src/app.module.ts`
- Test: `apps/nestjs-backend/src/revenue-management/revenue-catalog.service.spec.ts`
- Test: `apps/nestjs-backend/src/revenue-management/revenue-management.controller.spec.ts`

- [ ] **Step 1: Write failing backend tests for hotel list, room detail, and history**

`apps/nestjs-backend/src/revenue-management/revenue-catalog.service.spec.ts`

```ts
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
            recommendations: [{decisionStatus: 'accepted'}],
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
});
```

`apps/nestjs-backend/src/revenue-management/revenue-management.controller.spec.ts`

```ts
import {RevenueManagementController} from './revenue-management.controller';
import {RevenueCatalogService} from './revenue-catalog.service';

describe('RevenueManagementController', () => {
  const catalog = {
    listHotels: jest.fn(async () => [{id: 'hotel-1', name: '广州黄埔智选酒店'}]),
    getRoomTypeDetail: jest.fn(async () => ({id: 'room-1', name: '高级大床房'})),
    listRecommendationHistory: jest.fn(async () => [{id: 'rec-1', decisionStatus: 'accepted'}]),
  } as unknown as RevenueCatalogService;

  const controller = new RevenueManagementController(catalog, {} as never);

  it('returns hotel list payloads from the catalog service', async () => {
    await expect(controller.listHotels()).resolves.toEqual([{id: 'hotel-1', name: '广州黄埔智选酒店'}]);
  });
});
```

- [ ] **Step 2: Run the backend tests to verify they fail**

Run: `npm --prefix apps/nestjs-backend run test:unit -- --runTestsByPath src/revenue-management/revenue-catalog.service.spec.ts src/revenue-management/revenue-management.controller.spec.ts`  
Expected: FAIL because the revenue-management module, controller, and service do not exist yet.

- [ ] **Step 3: Implement the catalog service, controller, module, and AppModule wiring**

`apps/nestjs-backend/src/revenue-management/revenue-catalog.service.ts`

```ts
import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from '@next-nest-turbo-auth-boilerplate/db';
import {type HotelSummary} from '@next-nest-turbo-auth-boilerplate/shared';

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
      orderBy: {name: 'asc'},
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
        latestDecisionStatus: roomType.recommendations[0]?.decisionStatus ?? 'idle',
      })),
    }));
  }

  async getRoomTypeDetail(hotelId: string, roomTypeId: string) {
    const roomType = await this.prisma.roomType.findUnique({
      where: {id: roomTypeId},
      include: {
        hotel: true,
        recommendations: {orderBy: {createdAt: 'desc'}, take: 1},
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
      latestRecommendation: roomType.recommendations[0] ?? null,
    };
  }
}
```

`apps/nestjs-backend/src/revenue-management/revenue-management.controller.ts`

```ts
import {Controller, Get, Param} from '@nestjs/common';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {RevenueCatalogService} from './revenue-catalog.service';
import {MonitoringJobsService} from './monitoring-jobs.service';

@ApiTags('revenue-management')
@Controller('revenue')
export class RevenueManagementController {
  constructor(
    private readonly catalogService: RevenueCatalogService,
    private readonly monitoringJobsService: MonitoringJobsService,
  ) {}

  @Get('hotels')
  @ApiOperation({summary: 'List demo hotels and room-type summaries'})
  async listHotels() {
    return this.catalogService.listHotels();
  }

  @Get('hotels/:hotelId/room-types/:roomTypeId')
  @ApiOperation({summary: 'Load one room-type detail card'})
  async getRoomTypeDetail(@Param('hotelId') hotelId: string, @Param('roomTypeId') roomTypeId: string) {
    return this.catalogService.getRoomTypeDetail(hotelId, roomTypeId);
  }

  @Get('hotels/:hotelId/room-types/:roomTypeId/recommendations')
  @ApiOperation({summary: 'List persisted recommendation history for one room type'})
  async listRecommendationHistory(@Param('hotelId') hotelId: string, @Param('roomTypeId') roomTypeId: string) {
    return this.catalogService.listRecommendationHistory(hotelId, roomTypeId);
  }
}
```

`apps/nestjs-backend/src/revenue-management/revenue-management.module.ts`

```ts
import {Module} from '@nestjs/common';
import {RevenueManagementController} from './revenue-management.controller';
import {RevenueCatalogService} from './revenue-catalog.service';
import {MonitoringJobsService} from './monitoring-jobs.service';
import {RecommendationEngineService} from './recommendation-engine.service';
import {OtaScriptAdapter} from './ota-script.adapter';
import {OtaMockAdapter} from './ota-mock.adapter';

@Module({
  controllers: [RevenueManagementController],
  providers: [
    RevenueCatalogService,
    MonitoringJobsService,
    RecommendationEngineService,
    OtaScriptAdapter,
    OtaMockAdapter,
  ],
  exports: [RevenueCatalogService, MonitoringJobsService],
})
export class RevenueManagementModule {}
```

`apps/nestjs-backend/src/app.module.ts`

```ts
import {RevenueManagementModule} from './revenue-management/revenue-management.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        resolve(process.cwd(), `../../.env.${process.env.NODE_ENV ?? 'development'}`),
        resolve(process.cwd(), '../../.env'),
      ],
      validationSchema,
      load: [appConfig],
    }),
    PrismaModule,
    RedisModule,
    ThrottlerModule.forRoot({
      throttlers: [
        {name: 'default-throttler', ttl: 60 * 1000, limit: 60},
        {name: 'auth-throttler', ttl: 60 * 1000, limit: 5},
      ],
    }),
    CommonModule,
    HealthModule,
    AuthModule,
    UsersModule,
    RevenueManagementModule,
  ],
  providers: [{provide: APP_GUARD, useClass: ThrottlerGuard}],
})
export class AppModule {}
```

- [ ] **Step 4: Run the backend tests to verify the read APIs pass**

Run: `npm --prefix apps/nestjs-backend run test:unit -- --runTestsByPath src/revenue-management/revenue-catalog.service.spec.ts src/revenue-management/revenue-management.controller.spec.ts`  
Expected: PASS

- [ ] **Step 5: Commit the read API slice**

```bash
git add apps/nestjs-backend/src/revenue-management apps/nestjs-backend/src/app.module.ts
git commit -m "feat(api): add revenue catalog endpoints"
```

### Task 3: Implement Recommendation Calculation And Mock Competitor Adapter

**Files:**

- Create: `apps/nestjs-backend/src/revenue-management/recommendation-engine.service.ts`
- Create: `apps/nestjs-backend/src/revenue-management/ota-mock.adapter.ts`
- Create: `apps/nestjs-backend/src/revenue-management/recommendation-engine.service.spec.ts`
- Test: `apps/nestjs-backend/src/revenue-management/recommendation-engine.service.spec.ts`

- [ ] **Step 1: Write the failing recommendation engine test**

```ts
import {RecommendationEngineService} from './recommendation-engine.service';

describe('RecommendationEngineService', () => {
  const service = new RecommendationEngineService();

  it('raises price when inventory is healthy and competitors are priced higher', () => {
    const recommendation = service.buildRecommendation({
      hotelId: 'hotel-1',
      roomTypeId: 'room-1',
      currentPrice: 398,
      unsoldRooms: 8,
      competitors: [
        {
          hotelName: '广州科学城美居酒店',
          roomTypeName: '高级大床房',
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

    expect(recommendation.suggestedPrice).toBe(418);
    expect(recommendation.reason).toContain('竞品均价');
    expect(recommendation.decisionStatus).toBe('pending');
  });
});
```

- [ ] **Step 2: Run the recommendation unit test to verify it fails**

Run: `npm --prefix apps/nestjs-backend run test:unit -- --runTestsByPath src/revenue-management/recommendation-engine.service.spec.ts`  
Expected: FAIL because the recommendation engine does not exist yet.

- [ ] **Step 3: Implement the recommendation engine and fallback mock payloads**

`apps/nestjs-backend/src/revenue-management/recommendation-engine.service.ts`

```ts
import {Injectable} from '@nestjs/common';

@Injectable()
export class RecommendationEngineService {
  buildRecommendation(input: {
    hotelId: string;
    roomTypeId: string;
    currentPrice: number;
    unsoldRooms: number;
    competitors: Array<{
      hotelName: string;
      roomTypeName: string;
      channel: string;
      price: number;
      capturedAt: string;
      source: 'live' | 'mock';
    }>;
  }) {
    const averagePrice = Math.round(
      input.competitors.reduce((sum, competitor) => sum + competitor.price, 0) / input.competitors.length,
    );
    const suggestedPrice = input.unsoldRooms >= 6 ? averagePrice : Math.max(input.currentPrice - 10, averagePrice - 10);

    return {
      hotelId: input.hotelId,
      roomTypeId: input.roomTypeId,
      currentPrice: input.currentPrice,
      suggestedPrice,
      unsoldRooms: input.unsoldRooms,
      competitors: input.competitors,
      averagePrice,
      decisionStatus: 'pending' as const,
      reason: `当前剩余 ${input.unsoldRooms} 间，竞品均价约 ¥${averagePrice}，建议将价格调整至 ¥${suggestedPrice} 以保持竞争力并兼顾收益。`,
    };
  }
}
```

`apps/nestjs-backend/src/revenue-management/ota-mock.adapter.ts`

```ts
import {Injectable} from '@nestjs/common';

@Injectable()
export class OtaMockAdapter {
  async fetchCompetitors(roomTypeName: string) {
    const capturedAt = new Date('2026-04-27T12:00:00.000Z').toISOString();

    return [
      {
        hotelName: '广州科学城美居酒店',
        roomTypeName,
        channel: 'elong',
        price: 428,
        capturedAt,
        source: 'mock' as const,
      },
      {
        hotelName: '广州萝岗万达美华酒店',
        roomTypeName,
        channel: 'elong',
        price: 418,
        capturedAt,
        source: 'mock' as const,
      },
      {
        hotelName: '广州黄埔万科中心酒店',
        roomTypeName,
        channel: 'elong',
        price: 409,
        capturedAt,
        source: 'mock' as const,
      },
    ];
  }
}
```

- [ ] **Step 4: Run the recommendation unit test to verify it passes**

Run: `npm --prefix apps/nestjs-backend run test:unit -- --runTestsByPath src/revenue-management/recommendation-engine.service.spec.ts`  
Expected: PASS

- [ ] **Step 5: Commit the recommendation slice**

```bash
git add apps/nestjs-backend/src/revenue-management/recommendation-engine.service.ts apps/nestjs-backend/src/revenue-management/ota-mock.adapter.ts apps/nestjs-backend/src/revenue-management/recommendation-engine.service.spec.ts
git commit -m "feat(api): add revenue recommendation engine"
```

### Task 4: Implement Monitoring Jobs And OTA Script Fallback

**Files:**

- Create: `apps/nestjs-backend/src/revenue-management/monitoring-jobs.service.ts`
- Create: `apps/nestjs-backend/src/revenue-management/ota-script.adapter.ts`
- Create: `apps/nestjs-backend/src/revenue-management/monitoring-jobs.service.spec.ts`
- Modify: `apps/nestjs-backend/src/config/config-key.enum.ts`
- Modify: `apps/nestjs-backend/src/config/app.config.ts`
- Modify: `apps/nestjs-backend/src/config/validation.schema.ts`
- Test: `apps/nestjs-backend/src/revenue-management/monitoring-jobs.service.spec.ts`

- [ ] **Step 1: Write the failing monitoring-jobs orchestration tests**

```ts
import {MonitoringJobsService} from './monitoring-jobs.service';
import {RecommendationEngineService} from './recommendation-engine.service';
import {OtaMockAdapter} from './ota-mock.adapter';
import {OtaScriptAdapter} from './ota-script.adapter';

describe('MonitoringJobsService', () => {
  const catalog = {
    getRoomTypeDetail: jest.fn(async () => ({
      id: 'room-1',
      hotelId: 'hotel-1',
      hotelName: '广州黄埔智选酒店',
      roomTypeName: '高级大床房',
      currentPrice: 398,
      unsoldRooms: 8,
    })),
  };
  const recommendationEngine = new RecommendationEngineService();
  const liveAdapter = {fetchCompetitors: jest.fn()} as unknown as OtaScriptAdapter;
  const mockAdapter = {
    fetchCompetitors: jest.fn(async () => [
      {
        hotelName: 'mock-hotel',
        roomTypeName: '高级大床房',
        channel: 'elong',
        price: 420,
        capturedAt: '2026-04-27T12:00:00.000Z',
        source: 'mock',
      },
    ]),
  } as unknown as OtaMockAdapter;

  const service = new MonitoringJobsService(
    {pricingRecommendation: {create: jest.fn()}} as never,
    catalog as never,
    recommendationEngine,
    liveAdapter,
    mockAdapter,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('falls back to mock competitor data when live script lookup throws', async () => {
    jest.mocked(liveAdapter.fetchCompetitors).mockRejectedValue(new Error('script failed'));

    const job = await service.start({hotelId: 'hotel-1', roomTypeId: 'room-1'});

    expect(job.steps.find((step) => step.key === 'fetch_competitor_prices')?.status).toBe('fallback');
  });
});
```

- [ ] **Step 2: Run the orchestration tests to verify they fail**

Run: `npm --prefix apps/nestjs-backend run test:unit -- --runTestsByPath src/revenue-management/monitoring-jobs.service.spec.ts`  
Expected: FAIL because monitoring jobs and OTA adapters do not exist yet.

- [ ] **Step 3: Implement config keys, OTA script execution, and in-memory job orchestration**

`apps/nestjs-backend/src/config/config-key.enum.ts`

```ts
export enum ConfigKey {
  OTA_SCRIPT_WORKDIR = 'OTA_SCRIPT_WORKDIR',
  OTA_SCRIPT_ENTRY = 'OTA_SCRIPT_ENTRY',
  OTA_SCRIPT_TIMEOUT_MS = 'OTA_SCRIPT_TIMEOUT_MS',
}
```

`apps/nestjs-backend/src/config/app.config.ts`

```ts
[ConfigKey.OTA_SCRIPT_WORKDIR]: process.env.OTA_SCRIPT_WORKDIR,
[ConfigKey.OTA_SCRIPT_ENTRY]: process.env.OTA_SCRIPT_ENTRY ?? 'dist/index.js',
[ConfigKey.OTA_SCRIPT_TIMEOUT_MS]: Number(process.env.OTA_SCRIPT_TIMEOUT_MS ?? 20_000),
```

`apps/nestjs-backend/src/config/validation.schema.ts`

```ts
[ConfigKey.OTA_SCRIPT_WORKDIR]: Joi.string().optional().allow('', null),
[ConfigKey.OTA_SCRIPT_ENTRY]: Joi.string().default('dist/index.js'),
[ConfigKey.OTA_SCRIPT_TIMEOUT_MS]: Joi.number().integer().min(1000).default(20_000),
```

`apps/nestjs-backend/src/revenue-management/ota-script.adapter.ts`

```ts
import {Injectable, Logger} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {ConfigKey} from '../config/config-key.enum';

const execFileAsync = promisify(execFile);

@Injectable()
export class OtaScriptAdapter {
  private readonly logger = new Logger(OtaScriptAdapter.name);

  constructor(private readonly configService: ConfigService) {}

  async fetchCompetitors(hotelName: string, roomTypeName: string) {
    const cwd = this.configService.get<string>(ConfigKey.OTA_SCRIPT_WORKDIR);
    if (!cwd) {
      throw new Error('OTA_SCRIPT_WORKDIR is not configured');
    }

    const entry = this.configService.getOrThrow<string>(ConfigKey.OTA_SCRIPT_ENTRY);
    const timeout = this.configService.getOrThrow<number>(ConfigKey.OTA_SCRIPT_TIMEOUT_MS);

    const {stdout} = await execFileAsync(
      'node',
      [entry, 'hotel-rooms', 'elong', hotelName, '20260424', '20260425', '94288548'],
      {
        cwd,
        timeout,
        windowsHide: true,
      },
    );

    this.logger.log(`Loaded live OTA competitor data for ${hotelName} / ${roomTypeName}`);

    return JSON.parse(stdout) as Array<{
      hotelName: string;
      roomTypeName: string;
      channel: string;
      price: number;
      capturedAt: string;
      source: 'live';
    }>;
  }
}
```

`apps/nestjs-backend/src/revenue-management/monitoring-jobs.service.ts`

```ts
import crypto from 'node:crypto';
import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from '@next-nest-turbo-auth-boilerplate/db';
import {type CreateMonitoringJobDto} from '@next-nest-turbo-auth-boilerplate/shared';
import {RevenueCatalogService} from './revenue-catalog.service';
import {RecommendationEngineService} from './recommendation-engine.service';
import {OtaScriptAdapter} from './ota-script.adapter';
import {OtaMockAdapter} from './ota-mock.adapter';

@Injectable()
export class MonitoringJobsService {
  private readonly jobs = new Map<string, any>();

  constructor(
    private readonly prisma: PrismaService,
    private readonly catalogService: RevenueCatalogService,
    private readonly recommendationEngine: RecommendationEngineService,
    private readonly otaScriptAdapter: OtaScriptAdapter,
    private readonly otaMockAdapter: OtaMockAdapter,
  ) {}

  async start(dto: CreateMonitoringJobDto) {
    const roomType = await this.catalogService.getRoomTypeDetail(dto.hotelId, dto.roomTypeId);
    const jobId = crypto.randomUUID();
    const steps = [
      {key: 'check_inventory', status: 'done', message: '正在检查本店库存', source: 'system'},
      {key: 'fetch_competitor_prices', status: 'running', message: '正在抓取附近酒店价格', source: 'system'},
      {key: 'calculate_market_average', status: 'pending', message: '正在计算竞品均价', source: 'system'},
      {key: 'generate_recommendation', status: 'pending', message: '正在生成调价建议', source: 'system'},
      {key: 'waiting_user_confirmation', status: 'pending', message: '等待用户确认', source: 'system'},
    ];

    let competitors;
    try {
      competitors = await this.otaScriptAdapter.fetchCompetitors(roomType.hotelName, roomType.roomTypeName);
      steps[1].status = 'done';
      steps[1].source = 'live';
    } catch {
      competitors = await this.otaMockAdapter.fetchCompetitors(roomType.roomTypeName);
      steps[1].status = 'fallback';
      steps[1].source = 'mock';
      steps[1].message = '附近酒店价格抓取失败，已回退到 mock 数据';
    }

    steps[2].status = 'done';
    const recommendation = this.recommendationEngine.buildRecommendation({
      hotelId: dto.hotelId,
      roomTypeId: dto.roomTypeId,
      currentPrice: roomType.currentPrice,
      unsoldRooms: roomType.unsoldRooms,
      competitors,
    });
    steps[3].status = 'done';

    const persistedRecommendation = await this.prisma.pricingRecommendation.create({
      data: {
        hotelId: dto.hotelId,
        roomTypeId: dto.roomTypeId,
        currentPrice: recommendation.currentPrice,
        suggestedPrice: recommendation.suggestedPrice,
        unsoldRooms: recommendation.unsoldRooms,
        reason: recommendation.reason,
        competitorData: recommendation.competitors,
        decisionStatus: recommendation.decisionStatus,
      },
    });

    steps[4].status = 'running';

    const job = {
      id: jobId,
      hotelId: dto.hotelId,
      roomTypeId: dto.roomTypeId,
      status: 'waiting_confirmation',
      currentStep: 'waiting_user_confirmation',
      recommendationId: persistedRecommendation.id,
      steps,
    };

    this.jobs.set(jobId, job);
    return job;
  }

  getById(jobId: string) {
    const job = this.jobs.get(jobId);
    if (!job) {
      throw new NotFoundException('Monitoring job not found');
    }

    return job;
  }
}
```

- [ ] **Step 4: Run the orchestration tests to verify they pass**

Run: `npm --prefix apps/nestjs-backend run test:unit -- --runTestsByPath src/revenue-management/monitoring-jobs.service.spec.ts`  
Expected: PASS

- [ ] **Step 5: Commit the job orchestration slice**

```bash
git add apps/nestjs-backend/src/revenue-management apps/nestjs-backend/src/config
git commit -m "feat(api): add revenue monitoring jobs"
```

### Task 5: Add Recommendation Decision Endpoint And Backend Integration Coverage

**Files:**

- Modify: `apps/nestjs-backend/src/revenue-management/revenue-management.controller.ts`
- Modify: `apps/nestjs-backend/src/revenue-management/revenue-catalog.service.ts`
- Modify: `apps/nestjs-backend/src/revenue-management/monitoring-jobs.service.ts`
- Modify: `apps/nestjs-backend/src/revenue-management/revenue-management.controller.spec.ts`
- Test: `apps/nestjs-backend/src/revenue-management/revenue-management.controller.spec.ts`

- [ ] **Step 1: Extend the controller spec with a failing decision test**

```ts
it('passes accepted decisions to the monitoring job service', async () => {
  const monitoringJobs = {
    decide: jest.fn(async () => ({id: 'rec-1', decisionStatus: 'accepted'})),
  };
  const controller = new RevenueManagementController({} as never, monitoringJobs as never);

  await expect(controller.decide('rec-1', {decision: 'accepted'})).resolves.toEqual({
    id: 'rec-1',
    decisionStatus: 'accepted',
  });

  expect(monitoringJobs.decide).toHaveBeenCalledWith('rec-1', 'accepted');
});
```

- [ ] **Step 2: Run the controller test to verify it fails**

Run: `npm --prefix apps/nestjs-backend run test:unit -- --runTestsByPath src/revenue-management/revenue-management.controller.spec.ts`  
Expected: FAIL because `decide` is not implemented.

- [ ] **Step 3: Implement the decision endpoint and Prisma update path**

`apps/nestjs-backend/src/revenue-management/revenue-management.controller.ts`

```ts
import {Body, Param, Post} from '@nestjs/common';
import {RecommendationDecisionDto} from '@next-nest-turbo-auth-boilerplate/shared';

@Post('recommendations/:recommendationId/decision')
async decide(
  @Param('recommendationId') recommendationId: string,
  @Body() dto: RecommendationDecisionDto,
) {
  return this.monitoringJobsService.decide(recommendationId, dto.decision);
}

@Post('monitoring-jobs')
async startMonitoring(@Body() dto: CreateMonitoringJobDto) {
  return this.monitoringJobsService.start(dto);
}

@Get('monitoring-jobs/:jobId')
async getMonitoringJob(@Param('jobId') jobId: string) {
  return this.monitoringJobsService.getById(jobId);
}
```

`apps/nestjs-backend/src/revenue-management/monitoring-jobs.service.ts`

```ts
async decide(recommendationId: string, decision: 'accepted' | 'rejected') {
  const recommendation = await this.prisma.pricingRecommendation.update({
    where: {id: recommendationId},
    data: {
      decisionStatus: decision,
      decidedAt: new Date(),
    },
  });

  for (const [jobId, job] of this.jobs.entries()) {
    if (job.recommendationId === recommendationId) {
      this.jobs.set(jobId, {...job, status: 'completed', currentStep: 'waiting_user_confirmation'});
    }
  }

  return recommendation;
}
```

`apps/nestjs-backend/src/revenue-management/revenue-catalog.service.ts`

```ts
async listRecommendationHistory(hotelId: string, roomTypeId: string) {
  return this.prisma.pricingRecommendation.findMany({
    where: {hotelId, roomTypeId},
    orderBy: {createdAt: 'desc'},
  });
}
```

- [ ] **Step 4: Run all backend revenue tests**

Run: `npm --prefix apps/nestjs-backend run test:unit -- --runTestsByPath src/revenue-management/revenue-management.controller.spec.ts src/revenue-management/revenue-catalog.service.spec.ts src/revenue-management/recommendation-engine.service.spec.ts src/revenue-management/monitoring-jobs.service.spec.ts`  
Expected: PASS

- [ ] **Step 5: Commit the decision flow**

```bash
git add apps/nestjs-backend/src/revenue-management
git commit -m "feat(api): add revenue recommendation decisions"
```

### Task 6: Build The Frontend Console Read Experience

**Files:**

- Create: `apps/vite-frontend/src/api/revenue-management.api.ts`
- Create: `apps/vite-frontend/src/features/revenue-management/query-keys.ts`
- Create: `apps/vite-frontend/src/features/revenue-management/use-revenue-console.ts`
- Create: `apps/vite-frontend/src/features/revenue-management/components/HotelListPanel.tsx`
- Create: `apps/vite-frontend/src/features/revenue-management/components/MonitoringDetailPanel.tsx`
- Create: `apps/vite-frontend/src/features/revenue-management/components/RecommendationHistoryTable.tsx`
- Create: `apps/vite-frontend/src/features/revenue-management/components/RevenueConsoleShell.tsx`
- Create: `apps/vite-frontend/src/features/revenue-management/components/revenue-console-shell.test.tsx`
- Create: `apps/vite-frontend/src/pages/revenue-management/RevenueManagementConsolePage.tsx`
- Modify: `apps/vite-frontend/src/router/index.tsx`
- Modify: `apps/vite-frontend/src/pages/Home.tsx`
- Test: `apps/vite-frontend/src/features/revenue-management/components/revenue-console-shell.test.tsx`

- [ ] **Step 1: Write the failing frontend shell test**

```tsx
import {render, screen} from '@testing-library/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RevenueConsoleShell} from './RevenueConsoleShell';

vi.mock('@/api/revenue-management.api', () => ({
  getRevenueHotelsApi: vi.fn(async () => [
    {
      id: 'hotel-1',
      name: '广州黄埔智选酒店',
      district: '黄埔区',
      roomTypes: [{id: 'room-1', name: '高级大床房', currentPrice: 398, unsoldRooms: 8, latestDecisionStatus: 'idle'}],
    },
  ]),
  getRoomTypeDetailApi: vi.fn(async () => ({
    id: 'room-1',
    hotelId: 'hotel-1',
    hotelName: '广州黄埔智选酒店',
    roomTypeName: '高级大床房',
    currentPrice: 398,
    unsoldRooms: 8,
    latestRecommendation: null,
  })),
  getRecommendationHistoryApi: vi.fn(async () => []),
}));

it('renders the hotel list and selected room detail', async () => {
  const client = new QueryClient({defaultOptions: {queries: {retry: false}}});

  render(
    <QueryClientProvider client={client}>
      <RevenueConsoleShell />
    </QueryClientProvider>,
  );

  expect(await screen.findByText('广州黄埔智选酒店')).toBeVisible();
  expect(await screen.findByText('高级大床房')).toBeVisible();
  expect(await screen.findByText('¥398')).toBeVisible();
});
```

- [ ] **Step 2: Run the frontend shell test to verify it fails**

Run: `npm --prefix apps/vite-frontend run test:unit -- src/features/revenue-management/components/revenue-console-shell.test.tsx`  
Expected: FAIL because the revenue-management frontend files do not exist yet.

- [ ] **Step 3: Implement the revenue API client, query keys, and read-only console shell**

`apps/vite-frontend/src/api/revenue-management.api.ts`

```ts
import {axiosInstance} from '@/lib/axios';

export async function getRevenueHotelsApi() {
  const response = await axiosInstance.get('/revenue/hotels', {skipAuthRedirect: true, skipAuthRefresh: true});
  return response.data;
}

export async function getRoomTypeDetailApi(hotelId: string, roomTypeId: string) {
  const response = await axiosInstance.get(`/revenue/hotels/${hotelId}/room-types/${roomTypeId}`, {
    skipAuthRedirect: true,
    skipAuthRefresh: true,
  });
  return response.data;
}

export async function getRecommendationHistoryApi(hotelId: string, roomTypeId: string) {
  const response = await axiosInstance.get(`/revenue/hotels/${hotelId}/room-types/${roomTypeId}/recommendations`, {
    skipAuthRedirect: true,
    skipAuthRefresh: true,
  });
  return response.data;
}
```

`apps/vite-frontend/src/features/revenue-management/query-keys.ts`

```ts
export const revenueKeys = {
  all: ['revenue'] as const,
  hotels: () => [...revenueKeys.all, 'hotels'] as const,
  roomType: (hotelId: string, roomTypeId: string) => [...revenueKeys.all, 'room-type', hotelId, roomTypeId] as const,
  history: (hotelId: string, roomTypeId: string) => [...revenueKeys.all, 'history', hotelId, roomTypeId] as const,
};
```

`apps/vite-frontend/src/features/revenue-management/use-revenue-console.ts`

```ts
import {useQuery} from '@tanstack/react-query';
import {getRecommendationHistoryApi, getRevenueHotelsApi, getRoomTypeDetailApi} from '@/api/revenue-management.api';
import {revenueKeys} from './query-keys';

export function useRevenueHotels() {
  return useQuery({queryKey: revenueKeys.hotels(), queryFn: getRevenueHotelsApi, staleTime: 30_000});
}

export function useRoomTypeDetail(hotelId: string | undefined, roomTypeId: string | undefined) {
  return useQuery({
    queryKey: revenueKeys.roomType(hotelId ?? 'none', roomTypeId ?? 'none'),
    queryFn: () => getRoomTypeDetailApi(hotelId!, roomTypeId!),
    enabled: Boolean(hotelId && roomTypeId),
  });
}

export function useRecommendationHistory(hotelId: string | undefined, roomTypeId: string | undefined) {
  return useQuery({
    queryKey: revenueKeys.history(hotelId ?? 'none', roomTypeId ?? 'none'),
    queryFn: () => getRecommendationHistoryApi(hotelId!, roomTypeId!),
    enabled: Boolean(hotelId && roomTypeId),
  });
}
```

`apps/vite-frontend/src/features/revenue-management/components/RevenueConsoleShell.tsx`

```tsx
import {useEffect, useState} from 'react';
import {HotelListPanel} from './HotelListPanel';
import {MonitoringDetailPanel} from './MonitoringDetailPanel';
import {RecommendationHistoryTable} from './RecommendationHistoryTable';
import {useRecommendationHistory, useRevenueHotels, useRoomTypeDetail} from '../use-revenue-console';

export function RevenueConsoleShell() {
  const hotelsQuery = useRevenueHotels();
  const firstRoomType = hotelsQuery.data?.[0]?.roomTypes[0];
  const [selectedHotelId, setSelectedHotelId] = useState<string | undefined>();
  const [selectedRoomTypeId, setSelectedRoomTypeId] = useState<string | undefined>();

  useEffect(() => {
    if (!selectedHotelId && hotelsQuery.data?.[0] && firstRoomType) {
      setSelectedHotelId(hotelsQuery.data[0].id);
      setSelectedRoomTypeId(firstRoomType.id);
    }
  }, [firstRoomType, hotelsQuery.data, selectedHotelId]);

  const detailQuery = useRoomTypeDetail(selectedHotelId, selectedRoomTypeId);
  const historyQuery = useRecommendationHistory(selectedHotelId, selectedRoomTypeId);

  return (
    <section className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
      <HotelListPanel
        hotels={hotelsQuery.data ?? []}
        selectedHotelId={selectedHotelId}
        selectedRoomTypeId={selectedRoomTypeId}
        onSelect={(hotelId, roomTypeId) => {
          setSelectedHotelId(hotelId);
          setSelectedRoomTypeId(roomTypeId);
        }}
      />
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-6">
          <MonitoringDetailPanel detail={detailQuery.data} />
          <RecommendationHistoryTable rows={historyQuery.data ?? []} />
        </div>
        <div className="rounded-3xl border bg-white p-6 text-sm text-slate-500">
          尚未开始监测，点击“开始监测”后这里会展示 Agent 工作流。
        </div>
      </div>
    </section>
  );
}
```

`apps/vite-frontend/src/features/revenue-management/components/HotelListPanel.tsx`

```tsx
type Props = {
  hotels: Array<{
    id: string;
    name: string;
    district: string;
    roomTypes: Array<{
      id: string;
      name: string;
      currentPrice: number;
      unsoldRooms: number;
      latestDecisionStatus: string;
    }>;
  }>;
  selectedHotelId: string | undefined;
  selectedRoomTypeId: string | undefined;
  onSelect: (hotelId: string, roomTypeId: string) => void;
};

export function HotelListPanel({hotels, selectedHotelId, selectedRoomTypeId, onSelect}: Props) {
  return (
    <aside className="rounded-3xl border bg-white p-4">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">酒店列表</h3>
      <div className="space-y-3">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="rounded-2xl border p-3">
            <p className="font-medium text-slate-900">{hotel.name}</p>
            <p className="text-sm text-slate-500">{hotel.district}</p>
            <div className="mt-3 space-y-2">
              {hotel.roomTypes.map((roomType) => {
                const selected = selectedHotelId === hotel.id && selectedRoomTypeId === roomType.id;

                return (
                  <button
                    key={roomType.id}
                    type="button"
                    className={
                      selected
                        ? 'w-full rounded-2xl bg-slate-900 p-3 text-left text-white'
                        : 'w-full rounded-2xl bg-slate-100 p-3 text-left text-slate-900'
                    }
                    onClick={() => onSelect(hotel.id, roomType.id)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{roomType.name}</span>
                      <span>¥{roomType.currentPrice}</span>
                    </div>
                    <div className="mt-2 text-xs opacity-80">
                      剩余 {roomType.unsoldRooms} 间 · 状态 {roomType.latestDecisionStatus}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
```

`apps/vite-frontend/src/features/revenue-management/components/MonitoringDetailPanel.tsx`

```tsx
type Props = {
  detail:
    | {
        hotelName: string;
        roomTypeName: string;
        currentPrice: number;
        unsoldRooms: number;
        latestRecommendation: {decisionStatus: string} | null;
      }
    | undefined;
};

export function MonitoringDetailPanel({detail}: Props) {
  if (!detail) {
    return <section className="rounded-3xl border bg-white p-6 text-slate-500">请选择一个酒店房型。</section>;
  }

  return (
    <section className="rounded-3xl border bg-white p-6">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Monitoring Detail</p>
      <h2 className="mb-2 mt-2 text-3xl font-semibold text-slate-900">{detail.hotelName}</h2>
      <p className="text-lg text-slate-700">{detail.roomTypeName}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-amber-50 p-4">当前售价：¥{detail.currentPrice}</div>
        <div className="rounded-2xl bg-emerald-50 p-4">剩余未售：{detail.unsoldRooms} 间</div>
        <div className="rounded-2xl bg-slate-100 p-4">
          最新状态：{detail.latestRecommendation?.decisionStatus ?? 'idle'}
        </div>
      </div>
    </section>
  );
}
```

`apps/vite-frontend/src/features/revenue-management/components/RecommendationHistoryTable.tsx`

```tsx
type Props = {
  rows: Array<{
    id: string;
    currentPrice: number;
    suggestedPrice: number;
    decisionStatus: string;
    reason: string;
    createdAt: string;
  }>;
};

export function RecommendationHistoryTable({rows}: Props) {
  return (
    <section className="rounded-3xl border bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">建议历史</h3>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-slate-500">
            <th className="pb-3">时间</th>
            <th className="pb-3">当前售价</th>
            <th className="pb-3">建议售价</th>
            <th className="pb-3">状态</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-t">
              <td className="py-3">{row.createdAt}</td>
              <td className="py-3">¥{row.currentPrice}</td>
              <td className="py-3">¥{row.suggestedPrice}</td>
              <td className="py-3">{row.decisionStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
```

`apps/vite-frontend/src/pages/revenue-management/RevenueManagementConsolePage.tsx`

```tsx
import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import {RevenueConsoleShell} from '@/features/revenue-management/components/RevenueConsoleShell';

export function RevenueManagementConsolePage() {
  const {locale} = useParams<{locale: string}>();

  return (
    <>
      <Helmet>
        <title>Hotel Revenue Agent Console</title>
        <meta name="description" content="Revenue management monitoring console demo" />
        <html lang={locale ?? 'en'} />
      </Helmet>
      <RevenueConsoleShell />
    </>
  );
}
```

`apps/vite-frontend/src/router/index.tsx`

```tsx
const RevenueManagementConsolePage = React.lazy(async () => {
  const mod = await import('../pages/revenue-management/RevenueManagementConsolePage.tsx');
  return {default: mod.RevenueManagementConsolePage};
});

{
  index: true,
  element: (
    <SuspenseWrapper>
      <RevenueManagementConsolePage />
    </SuspenseWrapper>
  ),
}
```

- [ ] **Step 4: Run the frontend shell test to verify it passes**

Run: `npm --prefix apps/vite-frontend run test:unit -- src/features/revenue-management/components/revenue-console-shell.test.tsx`  
Expected: PASS

- [ ] **Step 5: Commit the frontend read experience**

```bash
git add apps/vite-frontend/src/api apps/vite-frontend/src/features/revenue-management apps/vite-frontend/src/pages/revenue-management apps/vite-frontend/src/router/index.tsx apps/vite-frontend/src/pages/Home.tsx
git commit -m "feat(frontend): add revenue console shell"
```

### Task 7: Implement Monitoring Workflow, Modal Decision Flow, And Polling

**Files:**

- Create: `apps/vite-frontend/src/features/revenue-management/components/AgentWorkflowPanel.tsx`
- Create: `apps/vite-frontend/src/features/revenue-management/components/RecommendationModal.tsx`
- Create: `apps/vite-frontend/src/features/revenue-management/components/revenue-monitoring-flow.test.tsx`
- Modify: `apps/vite-frontend/src/api/revenue-management.api.ts`
- Modify: `apps/vite-frontend/src/features/revenue-management/use-revenue-console.ts`
- Modify: `apps/vite-frontend/src/features/revenue-management/components/MonitoringDetailPanel.tsx`
- Modify: `apps/vite-frontend/src/features/revenue-management/components/RevenueConsoleShell.tsx`
- Test: `apps/vite-frontend/src/features/revenue-management/components/revenue-monitoring-flow.test.tsx`

- [ ] **Step 1: Write the failing monitoring flow test**

```tsx
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RevenueConsoleShell} from './RevenueConsoleShell';

vi.mock('@/api/revenue-management.api', () => ({
  getRevenueHotelsApi: vi.fn(async () => [
    {
      id: 'hotel-1',
      name: '广州黄埔智选酒店',
      district: '黄埔区',
      roomTypes: [{id: 'room-1', name: '高级大床房', currentPrice: 398, unsoldRooms: 8, latestDecisionStatus: 'idle'}],
    },
  ]),
  getRoomTypeDetailApi: vi.fn(async () => ({
    id: 'room-1',
    hotelId: 'hotel-1',
    hotelName: '广州黄埔智选酒店',
    roomTypeName: '高级大床房',
    currentPrice: 398,
    unsoldRooms: 8,
    latestRecommendation: null,
  })),
  getRecommendationHistoryApi: vi.fn(async () => []),
  createMonitoringJobApi: vi.fn(async () => ({id: 'job-1', status: 'running'})),
  getMonitoringJobApi: vi.fn(async () => ({
    id: 'job-1',
    status: 'waiting_confirmation',
    recommendationId: 'rec-1',
    steps: [
      {key: 'check_inventory', status: 'done', message: '正在检查本店库存', source: 'system'},
      {
        key: 'fetch_competitor_prices',
        status: 'fallback',
        message: '附近酒店价格抓取失败，已回退到 mock 数据',
        source: 'mock',
      },
      {key: 'calculate_market_average', status: 'done', message: '正在计算竞品均价', source: 'system'},
      {key: 'generate_recommendation', status: 'done', message: '正在生成调价建议', source: 'system'},
      {key: 'waiting_user_confirmation', status: 'running', message: '等待用户确认', source: 'system'},
    ],
    recommendation: {
      id: 'rec-1',
      currentPrice: 398,
      suggestedPrice: 418,
      unsoldRooms: 8,
      reason: '竞品均价较高',
      competitors: [
        {
          hotelName: '广州科学城美居酒店',
          roomTypeName: '高级大床房',
          channel: 'elong',
          price: 428,
          capturedAt: '2026-04-27T12:00:00.000Z',
          source: 'mock',
        },
      ],
    },
  })),
  submitRecommendationDecisionApi: vi.fn(async () => ({id: 'rec-1', decisionStatus: 'accepted'})),
}));

it('opens the recommendation modal after polling and submits an accepted decision', async () => {
  const client = new QueryClient({defaultOptions: {queries: {retry: false}, mutations: {retry: false}}});
  const user = userEvent.setup();

  render(
    <QueryClientProvider client={client}>
      <RevenueConsoleShell />
    </QueryClientProvider>,
  );

  await user.click(await screen.findByRole('button', {name: '开始监测'}));
  expect(await screen.findByText('等待用户确认')).toBeVisible();
  expect(await screen.findByRole('dialog', {name: '调价建议'})).toBeVisible();

  await user.click(screen.getByRole('button', {name: '是，采纳建议'}));

  await waitFor(() => {
    expect(screen.queryByRole('dialog', {name: '调价建议'})).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the monitoring flow test to verify it fails**

Run: `npm --prefix apps/vite-frontend run test:unit -- src/features/revenue-management/components/revenue-monitoring-flow.test.tsx`  
Expected: FAIL because monitoring mutations, polling, and modal behavior are not implemented.

- [ ] **Step 3: Implement job polling, workflow rendering, and recommendation decision modal**

`apps/vite-frontend/src/api/revenue-management.api.ts`

```ts
export async function createMonitoringJobApi(payload: {hotelId: string; roomTypeId: string}) {
  const response = await axiosInstance.post('/revenue/monitoring-jobs', payload, {
    skipAuthRedirect: true,
    skipAuthRefresh: true,
  });
  return response.data;
}

export async function getMonitoringJobApi(jobId: string) {
  const response = await axiosInstance.get(`/revenue/monitoring-jobs/${jobId}`, {
    skipAuthRedirect: true,
    skipAuthRefresh: true,
  });
  return response.data;
}

export async function submitRecommendationDecisionApi(recommendationId: string, decision: 'accepted' | 'rejected') {
  const response = await axiosInstance.post(
    `/revenue/recommendations/${recommendationId}/decision`,
    {decision},
    {skipAuthRedirect: true, skipAuthRefresh: true},
  );
  return response.data;
}
```

`apps/vite-frontend/src/features/revenue-management/components/AgentWorkflowPanel.tsx`

```tsx
type Props = {
  steps: Array<{key: string; status: string; message: string; source: string}>;
};

export function AgentWorkflowPanel({steps}: Props) {
  return (
    <aside className="rounded-3xl border bg-slate-950 p-6 text-white">
      <h3 className="mb-4 text-xl font-semibold text-white">Agent 工作流</h3>
      <ol className="space-y-3">
        {steps.map((step) => (
          <li key={step.key} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between gap-4">
              <span>{step.message}</span>
              <span className="text-sm uppercase text-emerald-300">{step.status}</span>
            </div>
            <p className="mt-2 text-xs text-slate-300">source: {step.source}</p>
          </li>
        ))}
      </ol>
    </aside>
  );
}
```

`apps/vite-frontend/src/features/revenue-management/components/RecommendationModal.tsx`

```tsx
import * as AlertDialog from '@radix-ui/react-alert-dialog';

type Props = {
  open: boolean;
  recommendation: {
    id: string;
    currentPrice: number;
    suggestedPrice: number;
    unsoldRooms: number;
    reason: string;
    competitors: Array<{hotelName: string; roomTypeName: string; price: number}>;
  } | null;
  onAccept: () => void;
  onReject: () => void;
};

export function RecommendationModal({open, recommendation, onAccept, onReject}: Props) {
  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-slate-950/40" />
        <AlertDialog.Content className="fixed left-1/2 top-1/2 w-[min(680px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-6 shadow-2xl">
          <AlertDialog.Title className="text-2xl font-semibold text-slate-900">调价建议</AlertDialog.Title>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div>当前售价：¥{recommendation?.currentPrice}</div>
            <div>建议售价：¥{recommendation?.suggestedPrice}</div>
            <div>剩余未售：{recommendation?.unsoldRooms} 间</div>
          </div>
          <p className="mt-4 text-sm text-slate-600">{recommendation?.reason}</p>
          <div className="mt-6 flex gap-3">
            <button type="button" onClick={onAccept}>
              是，采纳建议
            </button>
            <button type="button" onClick={onReject}>
              否，暂不调整
            </button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
```

`apps/vite-frontend/src/features/revenue-management/components/RevenueConsoleShell.tsx`

```tsx
const [activeJobId, setActiveJobId] = useState<string | undefined>();
const [pendingRecommendation, setPendingRecommendation] = useState<any>(null);

const createJobMutation = useMutation({
  mutationFn: createMonitoringJobApi,
  onSuccess: (job) => setActiveJobId(job.id),
});

const activeJobQuery = useQuery({
  queryKey: [...revenueKeys.all, 'job', activeJobId ?? 'idle'],
  queryFn: () => getMonitoringJobApi(activeJobId!),
  enabled: Boolean(activeJobId),
  refetchInterval: (query) => {
    const status = query.state.data?.status;
    return status === 'waiting_confirmation' || status === 'completed' ? false : 1200;
  },
});

useEffect(() => {
  if (activeJobQuery.data?.status === 'waiting_confirmation' && activeJobQuery.data.recommendation) {
    setPendingRecommendation(activeJobQuery.data.recommendation);
  }
}, [activeJobQuery.data]);
```

- [ ] **Step 4: Run the frontend monitoring flow tests**

Run: `npm --prefix apps/vite-frontend run test:unit -- src/features/revenue-management/components/revenue-monitoring-flow.test.tsx`  
Expected: PASS

Run: `npm --prefix apps/vite-frontend run test:unit -- src/features/revenue-management/components/revenue-console-shell.test.tsx`  
Expected: PASS

- [ ] **Step 5: Commit the interactive workflow**

```bash
git add apps/vite-frontend/src/api/revenue-management.api.ts apps/vite-frontend/src/features/revenue-management
git commit -m "feat(frontend): add revenue monitoring workflow"
```

### Task 8: Add Playwright Coverage And Run Final Verification

**Files:**

- Create: `apps/vite-frontend/tests/revenue-management.spec.ts`
- Modify: `apps/vite-frontend/playwright.config.ts`
- Test: `apps/vite-frontend/tests/revenue-management.spec.ts`

- [ ] **Step 1: Write the failing Playwright flow test**

```ts
import {expect, test} from '@playwright/test';

test('runs the revenue console flow from monitoring start to accepted history entry', async ({page}) => {
  let decisionStatus = 'idle';

  await page.route('**/api/v1/revenue/**', async (route) => {
    const request = route.request();
    const url = request.url();

    if (request.method() === 'GET' && url.endsWith('/revenue/hotels')) {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([
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
                latestDecisionStatus: decisionStatus,
              },
            ],
          },
        ]),
      });
      return;
    }

    if (request.method() === 'POST' && url.endsWith('/revenue/monitoring-jobs')) {
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({id: 'job-1', status: 'running'}),
      });
      return;
    }

    if (request.method() === 'GET' && url.endsWith('/revenue/monitoring-jobs/job-1')) {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: 'job-1',
          status: 'waiting_confirmation',
          recommendation: {
            id: 'rec-1',
            currentPrice: 398,
            suggestedPrice: 418,
            unsoldRooms: 8,
            reason: '竞品均价较高',
            competitors: [{hotelName: '广州科学城美居酒店', roomTypeName: '高级大床房', price: 428}],
          },
          steps: [
            {key: 'check_inventory', status: 'done', message: '正在检查本店库存', source: 'system'},
            {
              key: 'fetch_competitor_prices',
              status: 'fallback',
              message: '附近酒店价格抓取失败，已回退到 mock 数据',
              source: 'mock',
            },
            {key: 'calculate_market_average', status: 'done', message: '正在计算竞品均价', source: 'system'},
            {key: 'generate_recommendation', status: 'done', message: '正在生成调价建议', source: 'system'},
            {key: 'waiting_user_confirmation', status: 'running', message: '等待用户确认', source: 'system'},
          ],
        }),
      });
      return;
    }

    if (request.method() === 'POST' && url.endsWith('/revenue/recommendations/rec-1/decision')) {
      decisionStatus = 'accepted';
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({id: 'rec-1', decisionStatus: 'accepted'}),
      });
      return;
    }

    await route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify([])});
  });

  await page.goto('/en');
  await page.getByRole('button', {name: '开始监测'}).click();
  await expect(page.getByRole('dialog', {name: '调价建议'})).toBeVisible();
  await page.getByRole('button', {name: '是，采纳建议'}).click();
  await expect(page.getByText('已采纳')).toBeVisible();
});
```

- [ ] **Step 2: Run the Playwright spec to verify it fails**

Run: `npm --prefix apps/vite-frontend run test:e2e -- tests/revenue-management.spec.ts`  
Expected: FAIL because the revenue console route and UI elements are not complete yet.

- [ ] **Step 3: Update Playwright startup target and add the console regression spec**

`apps/vite-frontend/playwright.config.ts`

```ts
webServer: {
  command: 'npm run dev',
  reuseExistingServer: !process.env.CI,
  timeout: 120_000,
  url: 'http://127.0.0.1:3000/en',
},
```

`apps/vite-frontend/tests/revenue-management.spec.ts`

```ts
import {expect, test} from '@playwright/test';

test('runs the revenue console flow from monitoring start to accepted history entry', async ({page}) => {
  let decisionStatus = 'idle';

  await page.route('**/api/v1/revenue/**', async (route) => {
    const request = route.request();
    const url = request.url();

    if (request.method() === 'GET' && url.endsWith('/revenue/hotels')) {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([
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
                latestDecisionStatus: decisionStatus,
              },
            ],
          },
        ]),
      });
      return;
    }

    if (request.method() === 'POST' && url.endsWith('/revenue/monitoring-jobs')) {
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({id: 'job-1', status: 'running'}),
      });
      return;
    }

    if (request.method() === 'GET' && url.endsWith('/revenue/monitoring-jobs/job-1')) {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: 'job-1',
          status: 'waiting_confirmation',
          recommendation: {
            id: 'rec-1',
            currentPrice: 398,
            suggestedPrice: 418,
            unsoldRooms: 8,
            reason: '竞品均价较高',
            competitors: [{hotelName: '广州科学城美居酒店', roomTypeName: '高级大床房', price: 428}],
          },
          steps: [
            {key: 'check_inventory', status: 'done', message: '正在检查本店库存', source: 'system'},
            {
              key: 'fetch_competitor_prices',
              status: 'fallback',
              message: '附近酒店价格抓取失败，已回退到 mock 数据',
              source: 'mock',
            },
            {key: 'calculate_market_average', status: 'done', message: '正在计算竞品均价', source: 'system'},
            {key: 'generate_recommendation', status: 'done', message: '正在生成调价建议', source: 'system'},
            {key: 'waiting_user_confirmation', status: 'running', message: '等待用户确认', source: 'system'},
          ],
        }),
      });
      return;
    }

    if (request.method() === 'POST' && url.endsWith('/revenue/recommendations/rec-1/decision')) {
      decisionStatus = 'accepted';
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({id: 'rec-1', decisionStatus: 'accepted'}),
      });
      return;
    }

    await route.fulfill({status: 200, contentType: 'application/json', body: JSON.stringify([])});
  });

  await page.goto('/en');
  await page.getByRole('button', {name: '开始监测'}).click();
  await expect(page.getByRole('dialog', {name: '调价建议'})).toBeVisible();
  await page.getByRole('button', {name: '是，采纳建议'}).click();
  await expect(page.getByText('已采纳')).toBeVisible();
});
```

- [ ] **Step 4: Run final verification for backend, frontend, and Playwright**

Run: `npm --prefix apps/nestjs-backend run test:unit -- --runTestsByPath src/revenue-management/revenue-management.controller.spec.ts src/revenue-management/revenue-catalog.service.spec.ts src/revenue-management/recommendation-engine.service.spec.ts src/revenue-management/monitoring-jobs.service.spec.ts`  
Expected: PASS

Run: `npm --prefix apps/vite-frontend run test:unit -- src/features/revenue-management/components/revenue-console-shell.test.tsx src/features/revenue-management/components/revenue-monitoring-flow.test.tsx`  
Expected: PASS

Run: `npm --prefix apps/vite-frontend run test:e2e -- tests/revenue-management.spec.ts`  
Expected: PASS

Run: `npm run build`  
Expected: PASS for all workspaces

- [ ] **Step 5: Commit the verified demo**

```bash
git add apps/vite-frontend/tests/revenue-management.spec.ts apps/vite-frontend/playwright.config.ts
git commit -m "test: cover revenue console demo flow"
```
