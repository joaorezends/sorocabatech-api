import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialService } from './application/SocialService';
import { Social } from './domain/Social';

@Module({
  imports: [TypeOrmModule.forFeature([Social])],
  providers: [SocialService],
  exports: [SocialService],
})
export class SocialModule {}
