import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkService } from './application/LinkService';
import { Link } from './domain/Link';

@Module({
  imports: [TypeOrmModule.forFeature([Link])],
  providers: [LinkService],
  exports: [LinkService],
})
export class LinkModule {}
