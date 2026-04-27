import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RevenueConsoleShell} from './revenue-console-shell.tsx';

vi.mock('@/api/revenue-management.api', () => ({
  getRevenueHotelsApi: vi.fn(async () => [
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
          latestDecisionStatus: 'idle',
        },
      ],
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
  createMonitoringJobApi: vi.fn(async () => ({
    id: 'job-1',
    status: 'running',
    currentStep: 'check_inventory',
    hotelId: 'hotel-1',
    roomTypeId: 'room-1',
    startedAt: '2026-04-27T12:00:00.000Z',
    steps: [],
  })),
  getMonitoringJobApi: vi.fn(async () => ({
    id: 'job-1',
    status: 'waiting_confirmation',
    currentStep: 'waiting_user_confirmation',
    hotelId: 'hotel-1',
    roomTypeId: 'room-1',
    recommendationId: 'rec-1',
    startedAt: '2026-04-27T12:00:00.000Z',
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
      decisionStatus: 'pending',
      createdAt: '2026-04-27T12:00:00.000Z',
      competitors: [
        {
          hotelName: '广州科学城美居酒店',
          roomTypeName: '高级双床房',
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

describe('RevenueConsoleShell monitoring flow', () => {
  it('opens the recommendation modal after polling and submits an accepted decision', async () => {
    const client = new QueryClient({
      defaultOptions: {
        queries: {retry: false},
        mutations: {retry: false},
      },
    });
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
});
