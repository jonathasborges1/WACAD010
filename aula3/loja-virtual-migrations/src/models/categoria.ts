import { Table, Column, Model, DataType, Default, HasMany, AllowNull } from 'sequelize-typescript';
import { Produto } from './produto';

// Definir o modelo de Categoria
@Table({ tableName: 'categoria' })
export class Categoria extends Model<Categoria> {
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, primaryKey: true })
  id!: string;

  @Column({ type: DataType.STRING(50) })
  descricao!: string;

  @AllowNull(true)
  @Column({ type: DataType.STRING, field: 'sigla' }) // Defina o campo "field" como "atributo_adicionado"
  sigla!: string | null;
  
  @HasMany(() => Produto)
  produtos!: Produto[];
}