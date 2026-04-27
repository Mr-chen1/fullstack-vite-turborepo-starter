import {expect, test} from '@playwright/test';

test('runs the revenue console flow from monitoring start to accepted history entry', async ({page}) => {
  let decisionStatus: 'idle' | 'accepted' = 'idle';
  let currentPrice = 398;
  let historyRows: Array<Record<string, unknown>> = [];

  await page.route('**/api/v1/users/me', async (route) => {
    await route.fulfill({
      status: 401,
      contentType: 'application/json',
      body: JSON.stringify({message: 'guest', statusCode: 401}),
    });
  });

  await page.route('**/api/v1/auth/refresh', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ok: true}),
    });
  });

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
                currentPrice,
                unsoldRooms: 8,
                latestDecisionStatus: decisionStatus,
              },
            ],
          },
        ]),
      });
      return;
    }

    if (request.method() === 'GET' && url.endsWith('/revenue/hotels/hotel-1/room-types/room-1')) {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: 'room-1',
          hotelId: 'hotel-1',
          hotelName: '广州黄埔智选酒店',
          roomTypeName: '高级大床房',
          currentPrice,
          unsoldRooms: 8,
          latestRecommendation:
            decisionStatus === 'accepted'
              ? {
                id: 'rec-1',
                currentPrice: 398,
                suggestedPrice: 418,
                unsoldRooms: 8,
                reason: '竞品均价较高',
                decisionStatus: 'accepted',
                createdAt: '2026-04-27T12:00:00.000Z',
                decidedAt: '2026-04-27T12:05:00.000Z',
                competitors: [],
              }
              : null,
        }),
      });
      return;
    }

    if (request.method() === 'GET' && url.endsWith('/revenue/hotels/hotel-1/room-types/room-1/recommendations')) {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(historyRows),
      });
      return;
    }

    if (request.method() === 'POST' && url.endsWith('/revenue/monitoring-jobs')) {
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({
          id: 'job-1',
          status: 'running',
          currentStep: 'check_inventory',
          hotelId: 'hotel-1',
          roomTypeId: 'room-1',
          recommendationId: 'rec-1',
          startedAt: '2026-04-27T12:00:00.000Z',
          steps: [],
        }),
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
        }),
      });
      return;
    }

    if (request.method() === 'POST' && url.endsWith('/revenue/recommendations/rec-1/decision')) {
      decisionStatus = 'accepted';
      currentPrice = 418;
      historyRows = [
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
      ];

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(historyRows[0]),
      });
      return;
    }

    await route.fulfill({status: 404, body: 'Not mocked'});
  });

  await page.goto('/en');

  await page.getByRole('button', {name: '开始监测'}).click();
  await expect(page.getByRole('dialog', {name: '调价建议'})).toBeVisible();
  await page.getByRole('button', {name: '是，采纳建议'}).click();

  await expect(page.getByText('当前状态：已采纳')).toBeVisible();
  await expect(page.getByRole('cell', {name: '¥418'})).toBeVisible();
  await expect(page.getByRole('cell', {name: '已采纳'})).toBeVisible();
});
