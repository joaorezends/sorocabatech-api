import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndexController } from './controllers/index.controller';
import { Link } from './business/link/domain/Link';
import { LinkModule } from './business/link/LinkModule';
import { SocialModule } from './business/social/SocialModule';
import { Social } from './business/social/domain/Social';

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
  controllers: [IndexController],
})
export class AppModule {}
