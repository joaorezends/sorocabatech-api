import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer/domain/Customer';
import { CustomerModule } from './customer/CustomerModule';
import { Link } from './link/domain/Link';
import { LinkModule } from './link/LinkModule';
import { SocialModule } from './social/SocialModule';
import { Social } from './social/domain/Social';
import { AuthModule } from './auth/AuthModule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('TYPEORM_HOST'),
        port: +configService.get<string>('TYPEORM_PORT'),
        username: configService.get<string>('TYPEORM_USERNAME'),
        password: configService.get<string>('TYPEORM_PASSWORD'),
        database: configService.get<string>('TYPEORM_DATABASE'),
        entities: [Customer, Link, Social],
        ssl: {
          rejectUnauthorized: false,
        },
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    CustomerModule,
    LinkModule,
    SocialModule,
  ],
})
export class AppModule {}
