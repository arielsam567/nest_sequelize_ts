import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  async obterTodos(): Promise<Livro[]> {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Livro> {
    const livro = await this.livrosService.obterUm(params.id);

    if (livro === null) {
      throw new HttpException(
        {
          error: 'Livro not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return livro;
  }

  @Post()
  async criar(@Body() livro: Livro) {
    return this.livrosService.criar(livro);
  }

  @Put()
  @HttpCode(202)
  async alterar(@Body() livro: Livro): Promise<[number]> {
    const statusValue = await this.livrosService.alterar(livro);

    if (statusValue[0] === 0) {
      throw new HttpException(
        {
          error: 'Livro not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return;
  }

  @Delete(':id')
  async apagar(@Param() params) {
    const statusValue = await this.livrosService.apagar(params.id);

    if (statusValue === 0) {
      throw new HttpException(
        {
          error: 'Livro not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return;
  }
}
