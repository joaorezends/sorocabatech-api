import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from '../application/UserService';
import { User } from '../domain/User';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/users/:id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.findOne({ where: { id } });
  }
}
