import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { Livro } from './livros/livro.model';
import { LivrosController } from './livros/livros.controller';
import { LivrosService } from './livros/livros.service';
import { User } from './user/user.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'leandro',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Livro, User]),
  ],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
