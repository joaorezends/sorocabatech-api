import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Social } from '../domain/Social';

@Injectable()
export class SocialService {
  constructor(
    @InjectRepository(Social)
    private readonly socialRepository: Repository<Social>,
  ) {}

  findAll(): Promise<Social[]> {
    return this.socialRepository.find();
  }
}
