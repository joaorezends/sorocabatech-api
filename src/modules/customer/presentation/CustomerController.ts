import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CustomerService } from '../application/CustomerService';
import { Customer } from '../domain/Customer';

@Controller()
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('/customers')
  findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @Get('/customers/:id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Customer> {
    return this.customerService.findOne({ where: { id } });
  }
}
