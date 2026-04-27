# Hotel Revenue Agent Console Design

Date: 2026-04-27

## 1. Intent

Build a web-based hotel revenue management Agent console demo for video recording.

The demo exists to show a believable hotel pricing workflow without relying on Feishu:

- Operators can browse multiple hotels and room types in a console UI.
- Operators can trigger a monitoring run for a selected room type.
- The system shows an Agent-like step-by-step workflow while it evaluates inventory, competitor pricing, and a pricing recommendation.
- The operator can accept or reject the recommendation.
- The decision is recorded in history.

The first version should look like a real product, but it does not need to connect to a real PMS or perform real price write-back.

## 2. Capability Scope

### In Scope

- Multi-hotel console UI
- Hotel list plus selected room-type detail
- Agent workflow panel with step-by-step progress
- Backend monitoring job resource
- Recommendation modal with current price, suggested price, inventory, competitor list, and reasoning
- Accept or reject recommendation
- Recommendation history persisted with Prisma
- OTA script integration attempted from NestJS
- Automatic fallback to mock competitor data when script execution or parsing fails

### Out of Scope

- Login and authentication
- Real PMS/OTA price write-back
- Multi-job orchestration or queue infrastructure
- SSE/WebSocket streaming
- Generic agent platform abstractions
- Complex filters, search, pagination, and role-based permissions

## 3. User Experience

### Primary Screen Layout

The console page is divided into four functional areas:

1. Hotel list
   - Shows multiple hotels and room-type summaries
   - Each row/card includes hotel name, room type, current price, unsold room count, and latest recommendation status
   - Selecting an item updates the main detail panel
2. Monitoring detail
   - Shows the currently selected hotel and room type
   - Displays current price, unsold inventory, latest status, and the main `Start Monitoring` action
3. Agent workflow panel
   - Shows the current monitoring job state and step progression
   - Steps:
     - checking local inventory
     - fetching nearby hotel prices
     - calculating competitor average
     - generating pricing recommendation
     - waiting for user confirmation
4. Recommendation history
   - Shows past recommendations for the selected room type
   - Includes generated time, current price, suggested price, decision, and reason summary

### Primary Flow

1. User opens the console page directly without login.
2. User selects a hotel and room type from the list.
3. User clicks `Start Monitoring`.
4. Frontend creates a monitoring job through the backend.
5. The workflow panel updates through polling as the backend advances the job.
6. When the recommendation is ready, the frontend opens a modal.
7. User accepts or rejects the recommendation.
8. The current status updates and the record is added to history.

## 4. Architecture

### Recommended System Shape

This version uses an event/task-oriented backend model rather than a simple request-response flow.

- Frontend is a console UI in `apps/vite-frontend`
- Backend is a NestJS orchestration layer in `apps/nestjs-backend`
- Shared DTOs and domain types live in `packages/shared`
- Prisma persists recommendation history and decision outcomes
- Monitoring jobs are modeled as short-lived backend resources
- OTA data collection is attempted through a script adapter, with mock fallback

### Why This Shape

- It makes the Agent workflow visible and structured in the UI.
- It matches future expansion toward real monitoring jobs.
- It keeps the script integration at one boundary instead of leaking command execution concerns across the app.

## 5. Components

### Frontend

- `RevenueManagementConsolePage`
  - Top-level page for the demo
- Hotel list feature
  - Renders selectable hotel and room-type entries
- Room-type detail feature
  - Shows selected room-type pricing and inventory context
- Agent workflow feature
  - Renders the monitoring job step timeline
- Recommendation modal feature
  - Renders current price, suggested price, competitor prices, and reasoning
- Recommendation history table feature
  - Renders persisted recommendation history
- Revenue management API client
  - Encapsulates REST calls and polling behavior

### Backend

- Revenue management controller
  - Exposes hotel, job, and recommendation endpoints
- Revenue management service
  - Coordinates list/read operations, recommendation history, and decision handling
- Monitoring orchestration service
  - Creates and advances monitoring jobs
- OTA script adapter
  - Executes the existing Node.js Playwright script commands and normalizes results
- OTA mock adapter
  - Supplies fallback competitor data when the script path fails
- Recommendation engine service
  - Computes competitor average and recommendation payload

### Persistence

- Hotel data source
  - Seeded or fixed mock hotel and room-type data for the demo
- Recommendation persistence
  - Prisma-backed recommendation history and user decisions

## 6. Monitoring Job Model

### MonitoringJob

Represents a monitoring run for one hotel room type.

Fields:

- `id`
- `hotelId`
- `roomTypeId`
- `status`: `queued | running | waiting_confirmation | completed | failed`
- `currentStep`
- `startedAt`
- `completedAt`
- `recommendationId?`

### MonitoringJobStep

Represents a structured step in the job lifecycle.

Fields:

- `key`: `check_inventory | fetch_competitor_prices | calculate_market_average | generate_recommendation | waiting_user_confirmation`
- `status`: `pending | running | done | failed | fallback`
- `message`
- `source`: `live | mock | system`
- `startedAt?`
- `completedAt?`

### PricingRecommendation

Represents the recommendation produced by one job.

Fields:

- `id`
- `hotelId`
- `roomTypeId`
- `currentPrice`
- `suggestedPrice`
- `unsoldRooms`
- `reason`
- `decisionStatus`: `pending | accepted | rejected`
- `createdAt`
- `decidedAt?`

### CompetitorPrice

Represents one competitor snapshot used in the recommendation.

Fields:

- `hotelName`
- `roomTypeName`
- `channel`
- `price`
- `capturedAt`
- `source`: `live | mock`

## 7. Job Execution Flow

1. Frontend requests job creation for a selected room type.
2. Backend creates a `MonitoringJob` and marks it `running`.
3. Backend executes `check_inventory`.
4. Backend executes `fetch_competitor_prices`.
   - First try OTA script adapter.
   - If command execution, timeout, or parsing fails, mark the step `fallback` and pull competitor data from the mock adapter.
5. Backend calculates competitor average from normalized data.
6. Backend generates a recommendation payload.
7. Backend persists the recommendation with `decisionStatus = pending`.
8. Backend marks the job `waiting_confirmation`.
9. Frontend displays the modal.
10. User accepts or rejects.
11. Backend persists the decision and marks the job `completed`.

## 8. OTA Script Boundary

The existing external project exposes command-driven scraping flows such as:

- `node dist/index.js login`
- `node dist/index.js search-hotels elong "..."`
- `node dist/index.js hotel-rooms elong "..."`

For this demo, NestJS should not embed those command shapes throughout the application.

Instead:

- `ota-script.adapter.ts` owns all command construction and execution
- the adapter returns normalized competitor pricing data
- the rest of the backend only depends on normalized domain objects

### Fallback Rules

Fallback to mock data when any of the following happens:

- command execution fails
- command exceeds timeout
- output cannot be parsed
- result is empty for the selected monitoring scenario

The job step should surface that fallback happened so the UI can explain it clearly.

## 9. API Design

All endpoints live under `/api/v1/revenue`.

### `GET /api/v1/revenue/hotels`

Returns the left-panel hotel list with room-type summaries and latest status.

### `GET /api/v1/revenue/hotels/:hotelId/room-types/:roomTypeId`

Returns selected room-type detail for the center panel.

### `POST /api/v1/revenue/monitoring-jobs`

Request:

```json
{
  "hotelId": "hotel-1",
  "roomTypeId": "room-1"
}
```

Response:

```json
{
  "id": "job-123",
  "status": "running",
  "currentStep": "check_inventory",
  "steps": []
}
```

### `GET /api/v1/revenue/monitoring-jobs/:jobId`

Returns the full monitoring job state and recommendation summary if available.

### `POST /api/v1/revenue/recommendations/:recommendationId/decision`

Request:

```json
{
  "decision": "accepted"
}
```

Allowed values:

- `accepted`
- `rejected`

Returns the updated recommendation and current room-type status.

### `GET /api/v1/revenue/hotels/:hotelId/room-types/:roomTypeId/recommendations`

Returns recommendation history for the selected room type.

## 10. Frontend Data Flow

- Initial page load fetches hotel list.
- Selecting a hotel room type fetches room-type detail and recommendation history.
- Clicking `Start Monitoring` creates a monitoring job.
- Frontend polls the monitoring job endpoint every 1 to 1.5 seconds.
- When the job enters `waiting_confirmation`, the frontend opens the modal.
- After a decision is submitted, frontend refreshes detail and history and stops polling.

Polling is preferred over SSE for version one because:

- job duration is short
- implementation is simpler and more stable for recording
- the resource model remains compatible with a future upgrade to streaming

## 11. Persistence Strategy

### Persisted

- hotel seed data or fixed demo catalog
- room type seed data or fixed demo catalog
- pricing recommendations
- user decisions

### Non-Persisted for Version One

- short-lived monitoring job state can remain in memory

This preserves history across refreshes while avoiding unnecessary job infrastructure in the first implementation.

## 12. Monorepo Placement

### Backend

Add a `revenue-management` module under:

`apps/nestjs-backend/src/revenue-management`

Recommended substructure:

- `controllers/`
- `services/`
- `adapters/`
- `mappers/`
- `dto/`

### Frontend

Add:

- `apps/vite-frontend/src/pages/revenue-management/RevenueManagementConsolePage.tsx`
- `apps/vite-frontend/src/features/revenue-management/*`
- `apps/vite-frontend/src/api/revenue-management.api.ts`

Update routing so the root experience lands on the console page directly rather than the current authenticated home screen.

### Shared

Add shared domain types and DTOs under:

- `packages/shared/src/types/revenue-management.types.ts`
- `packages/shared/src/dtos/revenue-management/*`

## 13. Error Handling

### Backend

- Return standard project error shape
- Distinguish between job failure and step fallback
- If recommendation generation fails after fallback, mark the job `failed`

### Frontend

- Show failed step state in workflow panel
- Keep the detail page usable after a failed job
- Prevent duplicate `Start Monitoring` clicks while a job is active for the selected room type

## 14. Testing Strategy

Version one should include:

- backend unit tests for recommendation calculation and adapter fallback logic
- backend controller/service tests for job creation and decision flow
- frontend component tests for workflow rendering and modal decision behavior
- one E2E or integration-style critical flow for:
  - open console
  - start monitoring
  - wait for recommendation
  - accept or reject
  - verify history update

## 15. Success Criteria

The demo is successful when:

- the user can browse multiple hotels in a console
- a selected room type can launch a monitoring job
- the workflow panel visibly advances through Agent steps
- recommendation modal shows pricing context, competitors, and reasoning
- accept/reject updates the latest status and history table
- history persists via Prisma
- live script execution is attempted but demo remains stable through mock fallback
