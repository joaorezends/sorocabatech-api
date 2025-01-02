import { Controller, Get, Render } from '@nestjs/common';
import { LinkService } from '../business/link/application/LinkService';
import { SocialService } from '../business/social/application/SocialService';
import { SocialType } from '../business/social/domain/SocialType';

@Controller()
export class IndexController {
  constructor(
    private readonly linkService: LinkService,
    private readonly socialService: SocialService,
  ) {}

  @Get()
  @Render('index')
  async index() {
    const links = await this.linkService.findAll();
    const socials = (await this.socialService.findAll()).map((social) => ({
      ...social,
      isWhatsApp: social.type === SocialType.WHATSAPP,
      isInstagram: social.type === SocialType.INSTAGRAM,
    }));

    return { links, socials };
  }
}
