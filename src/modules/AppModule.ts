import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Link } from './link/domain/Link';
import { LinkModule } from './link/LinkModule';
import { SocialModule } from './social/SocialModule';
import { Social } from './social/domain/Social';

@Module({
  imports: [
    ConfigModule.forRoot({ cache: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('TYPEORM_HOST'),
        port: +configService.get('TYPEORM_PORT'),
        username: configService.get('TYPEORM_USERNAME'),
        password: configService.get('TYPEORM_PASSWORD'),
        database: configService.get('TYPEORM_DATABASE'),
        entities: [Link, Social],
        ssl: true,
      }),
      inject: [ConfigService],
    }),
    LinkModule,
    SocialModule,
  ],
})
export class AppModule {}
