import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FastifyReply, FastifyRequest } from 'fastify';
import { AuthService } from '../application/AuthService';
import { Credentials } from '../domain/Credentials';
import { AuthGuard } from '../AuthGuard';

@Controller()
export class AuthController {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(AuthGuard)
  @Get('/customers/auth/session')
  async session(@Req() request: FastifyRequest) {
    return request['customer'];
  }

  @Post('/customers/auth/login')
  async login(
    @Body() credentials: Credentials,
    @Res({ passthrough: true }) response: FastifyReply,
  ): Promise<void> {
    const token = await this.authService.login(credentials);
    response.setCookie('CTOKEN', token, {
      signed: true,
      expires: new Date(
        Date.now() + +this.configService.get<string>('JWT_EXPIRES_IN'),
      ),
      domain:
        this.configService.get<string>('NODE_ENV') === 'production'
          ? '.sorocabatech.com.br'
          : 'localhost',
      path: '/',
      httpOnly: true,
      secure: this.configService.get<string>('NODE_ENV') === 'production',
    });
  }
}
