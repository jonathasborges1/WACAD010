import { Table, Column, Model, DataType, Default, BeforeCreate, HasMany } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { Produto } from './produto';

// Definir o modelo de Categoria
@Table({ tableName: 'categoria' })
export class Categoria extends Model<Categoria> {
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, primaryKey: true })
  id!: string;

  @Column({ type: DataType.STRING(50) })
  descricao!: string;
  
  @HasMany(() => Produto)
  produtos!: Produto[];
}