import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Link } from '../domain/Link';

@Injectable()
export class LinkService {
  constructor(
    @InjectRepository(Link)
    private readonly linkRepository: Repository<Link>,
  ) {}

  findAll(): Promise<Link[]> {
    return this.linkRepository.find();
  }
}
