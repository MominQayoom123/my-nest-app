import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() body: { name: string; age: number; grade: string }) {
    return this.usersService.createUser(body.name, body.age, body.grade);
  }

  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }
}
