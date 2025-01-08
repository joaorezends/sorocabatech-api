import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CategoryService } from '../application/CategoryService';
import { Category } from '../domain/Category';

@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/catalog/categories')
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get('/catalog/categories/:id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    return this.categoryService.findOne({ where: { id } });
  }
}
