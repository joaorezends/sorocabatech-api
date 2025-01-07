import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from './application/CustomerService';
import { Customer } from './domain/Customer';
import { CustomerController } from './presentation/CustomerController';
import { AuthController } from './presentation/AuthController';
import { AuthService } from './application/AuthService';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [AuthController, CustomerController],
  providers: [AuthService, CustomerService],
})
export class CustomerModule {}
