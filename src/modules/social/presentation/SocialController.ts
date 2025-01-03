import { Controller, Get } from '@nestjs/common';
import { SocialService } from '../application/SocialService';
import { Social } from '../domain/Social';

@Controller()
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @Get('/socials')
  findAll(): Promise<Social[]> {
    return this.socialService.findAll();
  }
}
