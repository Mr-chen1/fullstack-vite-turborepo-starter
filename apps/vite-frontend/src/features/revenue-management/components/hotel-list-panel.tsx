import {type HotelSummary} from '@next-nest-turbo-auth-boilerplate/shared';

type Props = {
  readonly hotels: HotelSummary[];
  readonly selectedHotelId?: string;
  readonly selectedRoomTypeId?: string;
  readonly onSelect: (hotelId: string, roomTypeId: string) => void;
};

const statusCopy: Record<string, string> = {
  idle: '未处理',
  pending: '待确认',
  accepted: '已采纳',
  rejected: '已拒绝',
};

export function HotelListPanel({hotels, selectedHotelId, selectedRoomTypeId, onSelect}: Props) {
  return (
    <section className="rounded-[28px] border border-slate-200/80 bg-white/85 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur">
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Portfolio</p>
          <h3 className="mb-0 text-xl font-semibold tracking-tight text-slate-900">酒店列表</h3>
        </div>
        <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
          {hotels.length} 家酒店
        </span>
      </div>

      <div className="space-y-4">
        {hotels.map((hotel) => (
          <article key={hotel.id} className="rounded-3xl border border-slate-200 bg-slate-50/70 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-base font-semibold text-slate-900">{hotel.name}</p>
                <p className="text-sm text-slate-500">{hotel.district}</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {hotel.roomTypes.map((roomType) => {
                const isActive = hotel.id === selectedHotelId && roomType.id === selectedRoomTypeId;
                return (
                  <button
                    key={roomType.id}
                    type="button"
                    aria-pressed={isActive}
                    className={[
                      'flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition',
                      isActive
                        ? 'border-cyan-500 bg-cyan-950 text-white shadow-[0_14px_30px_rgba(8,47,73,0.22)]'
                        : 'border-slate-200 bg-white hover:border-cyan-300 hover:bg-cyan-50/50',
                    ].join(' ')}
                    onClick={() => { onSelect(hotel.id, roomType.id); }}
                  >
                    <div>
                      <p className="text-sm font-semibold">{roomType.name}</p>
                      <p className={isActive ? 'text-cyan-100' : 'text-slate-500'}>
                        ¥{roomType.currentPrice} · 剩余 {roomType.unsoldRooms} 间
                      </p>
                    </div>
                    <span
                      className={[
                        'rounded-full px-3 py-1 text-xs font-medium',
                        isActive ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-600',
                      ].join(' ')}
                    >
                      {statusCopy[roomType.latestDecisionStatus]}
                    </span>
                  </button>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
