import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async obterTodos(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async obterUm(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }

  async criar(user: User) {
    this.userModel.create(user);
  }

  async alterar(user: User): Promise<[number]> {
    return this.userModel.update(user, {
      where: {
        id: user.id,
      },
    });
  }

  async apagar(id: number) {
    const livro: User = await this.obterUm(id);
    livro.destroy();
  }
}
