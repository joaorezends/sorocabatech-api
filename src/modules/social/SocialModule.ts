import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialService } from './application/SocialService';
import { Social } from './domain/Social';
import { SocialController } from './presentation/SocialController';

@Module({
  imports: [TypeOrmModule.forFeature([Social])],
  controllers: [SocialController],
  providers: [SocialService],
})
export class SocialModule {}
