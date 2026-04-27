export const revenueKeys = {
  all: ['revenue-management'] as const,
  hotels: ['revenue-management', 'hotels'] as const,
  roomDetail: (hotelId: string, roomTypeId: string) =>
    ['revenue-management', 'room-detail', hotelId, roomTypeId] as const,
  history: (hotelId: string, roomTypeId: string) =>
    ['revenue-management', 'history', hotelId, roomTypeId] as const,
  job: (jobId: string) => ['revenue-management', 'job', jobId] as const,
};
