import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './application/AuthService';
import { AuthController } from './presentation/AuthController';
import { CustomerModule } from '../customer/CustomerModule';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        global: true,
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: `${configService.get('JWT_EXPIRES_IN')}ms` },
      }),
      inject: [ConfigService],
    }),
    CustomerModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
