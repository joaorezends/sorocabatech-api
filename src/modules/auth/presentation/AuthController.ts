import { Body, Controller, Post, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FastifyReply } from 'fastify';
import { AuthService } from '../application/AuthService';
import { Credentials } from '../domain/Credentials';

@Controller()
export class AuthController {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {}

  @Post('/auth/sign-in')
  async signIn(
    @Body() credentials: Credentials,
    @Res({ passthrough: true }) response: FastifyReply,
  ): Promise<void> {
    const token = await this.authService.signIn(credentials);
    response.setCookie('token', token, {
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
