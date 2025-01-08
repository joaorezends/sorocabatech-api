import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../domain/Customer';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  async findOne({ where }: { where: Partial<Customer> }): Promise<Customer> {
    const customer = await this.customerRepository.findOneBy(where);
    if (!customer) throw new NotFoundException('Customer not found.');
    return customer;
  }
}
