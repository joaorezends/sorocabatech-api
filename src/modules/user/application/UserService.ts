import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../domain/User';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne({ where }: { where: Partial<User> }): Promise<User> {
    const user = await this.userRepository.findOneBy(where);

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    return user;
  }
}
