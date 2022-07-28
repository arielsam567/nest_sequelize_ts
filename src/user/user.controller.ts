import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from './user.model';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async obterTodos(): Promise<User[]> {
    return this.usersService.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<User> {
    return this.usersService.obterUm(params.id);
  }

  @Post()
  async criar(@Body() user: User) {
    this.usersService.criar(user);
  }

  @Put()
  async alterar(@Body() user: User): Promise<[number]> {
    return this.usersService.alterar(user);
  }

  @Delete(':id')
  async apagar(@Param() params) {
    this.usersService.apagar(params.id);
  }
}
