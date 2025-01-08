import { Module } from '@nestjs/common';
import { CategoryModule } from './category/CategoryModule';

@Module({
  imports: [CategoryModule],
})
export class CatalogModule {}
