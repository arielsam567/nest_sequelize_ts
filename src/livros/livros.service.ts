import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  constructor(
    @InjectModel(Livro)
    private livroModel: typeof Livro,
  ) {}

  async obterTodos(): Promise<Livro[]> {
    return this.livroModel.findAll();
  }

  async obterUm(id: number): Promise<Livro> {
    console.log('PIZAA  ', await this.livroModel.findByPk(id));
    return this.livroModel.findByPk(id);
  }

  async criar(livro: Livro): Promise<Livro> {
    return this.livroModel.create(livro);
  }

  async alterar(livro: Livro): Promise<[number]> {
    return this.livroModel.update(livro, {
      where: {
        id: livro.id,
      },
    });
  }

  async apagar(id: number) {
    return this.livroModel.destroy({
      where: {
        id: id,
      },
    });
  }
}
