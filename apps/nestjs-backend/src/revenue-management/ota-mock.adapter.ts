import {Injectable} from '@nestjs/common';
import {type CompetitorPrice} from '@next-nest-turbo-auth-boilerplate/shared';

@Injectable()
export class OtaMockAdapter {
  async getCompetitorPrices(input: {
    hotelName: string;
    roomTypeName: string;
    currentPrice: number;
  }): Promise<CompetitorPrice[]> {
    const capturedAt = new Date().toISOString();

    const presets: Record<string, Array<{hotelName: string; roomTypeName: string; price: number}>> = {
      广州黄埔智选酒店: [
        {hotelName: '广州科学城美居酒店', roomTypeName: '高级双床房', price: 428},
        {hotelName: '广州萝岗万达美华酒店', roomTypeName: '豪华大床房', price: 418},
        {hotelName: '广州知识城国际假日酒店', roomTypeName: '高级大床房', price: 438},
      ],
      广州科学城美居酒店: [
        {hotelName: '广州黄埔智选酒店', roomTypeName: '高级大床房', price: 398},
        {hotelName: '广州萝岗万达美华酒店', roomTypeName: '豪华大床房', price: 418},
        {hotelName: '广州知识城国际假日酒店', roomTypeName: '行政双床房', price: 446},
      ],
      广州萝岗万达美华酒店: [
        {hotelName: '广州黄埔智选酒店', roomTypeName: '高级大床房', price: 398},
        {hotelName: '广州科学城美居酒店', roomTypeName: '高级双床房', price: 428},
        {hotelName: '广州知识城国际假日酒店', roomTypeName: '豪华大床房', price: 448},
      ],
    };

    const selectedPresets =
      presets[input.hotelName] ??
      [10, 26, 34].map((delta, index) => ({
        hotelName: `周边竞品酒店 ${index + 1}`,
        roomTypeName: input.roomTypeName,
        price: input.currentPrice + delta,
      }));

    return selectedPresets.map((competitor) => ({
      ...competitor,
      channel: 'elong',
      capturedAt,
      source: 'mock',
    }));
  }
}
