import {ApiProperty} from '@nestjs/swagger';
import {IsIn} from 'class-validator';

export class RecommendationDecisionDto {
  @ApiProperty({enum: ['accepted', 'rejected']})
  @IsIn(['accepted', 'rejected'])
  decision!: 'accepted' | 'rejected';
}
