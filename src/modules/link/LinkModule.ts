import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkService } from './application/LinkService';
import { Link } from './domain/Link';
import { LinkController } from './presentation/LinkController';

@Module({
  imports: [TypeOrmModule.forFeature([Link])],
  controllers: [LinkController],
  providers: [LinkService],
})
export class LinkModule {}
