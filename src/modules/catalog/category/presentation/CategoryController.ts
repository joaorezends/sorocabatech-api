import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from '../application/CategoryService';
import { Category } from '../domain/Category';
import { AuthGuard } from 'src/modules/user/AuthGuard';

@UseGuards(AuthGuard)
@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/catalog/categories')
  async create(@Body() data: Partial<Category>): Promise<Partial<Category>> {
    const id = await this.categoryService.create(data);
    return { id };
  }

  @Get('/catalog/categories')
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get('/catalog/categories/:id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    return this.categoryService.findOne({ where: { id } });
  }
}
