import {resolve} from 'node:path';
import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {ThrottlerModule} from '@nestjs/throttler';
import {PrismaModule} from '@next-nest-turbo-auth-boilerplate/db';
import {CommonModule} from './common/common.module';
import appConfig from './config/app.config';
import validationSchema from './config/validation.schema';
import {RedisModule} from './redis/redis.module';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
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
        {
          name: 'default-throttler',
          ttl: 60 * 1000,
          limit: 60,
        },
        {
          name: 'auth-throttler',
          ttl: 60 * 1000,
          limit: 5,
        },
      ],
    }),
    CommonModule,
    AuthModule,
    UsersModule,
    RevenueManagementModule,
  ],
})
export class AppModule {}
