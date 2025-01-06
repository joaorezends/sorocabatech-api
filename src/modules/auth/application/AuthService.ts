import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Credentials } from '../domain/Credentials';
import { CustomerService } from 'src/modules/customer/application/CustomerService';

@Injectable()
export class AuthService {
  constructor(
    private readonly customerService: CustomerService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn({ email, password }: Credentials): Promise<string> {
    const customer = await this.customerService
      .findOne({ where: { email } })
      .catch(() => null);

    if (customer?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: customer.id };
    return this.jwtService.signAsync(payload);
  }
}
