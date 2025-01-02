import { Controller, Get, Render } from '@nestjs/common';
import { LinkService } from '../business/link/application/LinkService';

@Controller()
export class IndexController {
  constructor(private readonly linkService: LinkService) {}

  @Get()
  @Render('index.hbs')
  async root() {
    const links = await this.linkService.findAll();
    return { links };
  }
}
