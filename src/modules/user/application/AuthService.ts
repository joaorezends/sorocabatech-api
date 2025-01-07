import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Credentials } from '../domain/Credentials';
import { UserService } from './UserService';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login({ email, password }: Credentials): Promise<string> {
    const user = await this.userService
      .findOne({ where: { email } })
      .catch(() => null);

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id };
    return this.jwtService.signAsync(payload);
  }
}
