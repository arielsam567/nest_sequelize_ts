import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class UserEntity {
  @IsNotEmpty({
    message: 'nome é obrigatório',
  })
  @IsString()
  nome: string;

  @IsNotEmpty({
    message: 'email é obrigatório',
  })
  @IsString()
  email: string;

  @IsNotEmpty({
    message: 'senha é obrigatório',
  })
  @IsEmail()
  senha: string;
}
