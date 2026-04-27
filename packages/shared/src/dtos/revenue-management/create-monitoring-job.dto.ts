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
