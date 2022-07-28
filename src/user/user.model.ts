import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
}
