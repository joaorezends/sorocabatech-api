import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './application/UserService';
import { User } from './domain/User';
import { UserController } from './presentation/UserController';
import { AuthController } from './presentation/AuthController';
import { AuthService } from './application/AuthService';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController, UserController],
  providers: [AuthService, UserService],
})
export class UserModule {}
