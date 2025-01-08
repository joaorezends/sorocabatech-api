import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../domain/Category';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findOne({ where }: { where: Partial<Category> }): Promise<Category> {
    const category = await this.categoryRepository.findOneBy(where);

    if (!category) {
      throw new NotFoundException('Category not found.');
    }

    return category;
  }
}
