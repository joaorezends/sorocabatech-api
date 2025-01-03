import { Controller, Get } from '@nestjs/common';
import { LinkService } from '../application/LinkService';
import { Link } from '../domain/Link';

@Controller()
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Get('/links')
  findAll(): Promise<Link[]> {
    return this.linkService.findAll();
  }
}
