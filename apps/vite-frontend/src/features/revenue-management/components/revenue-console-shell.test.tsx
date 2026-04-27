import {render, screen} from '@testing-library/react';
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
    {
      id: 'hotel-2',
      name: '广州科学城美居酒店',
      district: '黄埔区',
      roomTypes: [
        {
          id: 'room-2',
          name: '高级双床房',
          currentPrice: 428,
          unsoldRooms: 5,
          latestDecisionStatus: 'pending',
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
  getRecommendationHistoryApi: vi.fn(async () => [
    {
      id: 'rec-1',
      currentPrice: 398,
      suggestedPrice: 418,
      unsoldRooms: 8,
      reason: '竞品均价较高',
      decisionStatus: 'accepted',
      createdAt: '2026-04-27T12:00:00.000Z',
      decidedAt: '2026-04-27T12:05:00.000Z',
      competitors: [],
    },
  ]),
  createMonitoringJobApi: vi.fn(),
  getMonitoringJobApi: vi.fn(),
  submitRecommendationDecisionApi: vi.fn(),
}));

function renderShell(): void {
  const client = new QueryClient({
    defaultOptions: {
      queries: {retry: false},
      mutations: {retry: false},
    },
  });

  render(
    <QueryClientProvider client={client}>
      <RevenueConsoleShell />
    </QueryClientProvider>,
  );
}

describe('RevenueConsoleShell', () => {
  it('renders the hotel list, active room detail, and recommendation history', async () => {
    renderShell();

    expect(await screen.findByText('广州黄埔智选酒店')).toBeVisible();
    expect(await screen.findByText('高级大床房')).toBeVisible();
    expect(await screen.findByText('当前售价')).toBeVisible();
    expect(await screen.findByRole('button', {name: '开始监测'})).toBeVisible();
    expect(await screen.findByText('建议历史')).toBeVisible();
    expect(await screen.findByText('¥418')).toBeVisible();
  });
});
