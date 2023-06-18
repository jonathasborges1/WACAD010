import { Table, Column, Model, DataType, ForeignKey, BelongsTo, Default, BeforeCreate } from 'sequelize-typescript'
import { Categoria } from './categoria';
import { v4 as uuidv4 } from 'uuid';

// Definir o modelo de Produto
@Table({ tableName: 'produto' })
export class Produto extends Model<Produto> {
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, primaryKey: true })
  id!: string;

  @Column({ type: DataType.STRING(100) })
  descricao!: string;

  @Column({ type: DataType.DECIMAL(10, 2) })
  preco!: number;

  @Column({ type: DataType.INTEGER })
  quantidade!: number;

  @ForeignKey(() => Categoria)
  @Column({ type: DataType.UUID })
  categoria_id!: string;

  @Column({ type: DataType.DATE })
  data_criacao!: Date;

  @Column({ type: DataType.DATE })
  data_alteracao!: Date;

  @BelongsTo(() => Categoria)
  categoria!: Categoria;

  @BeforeCreate
  static generateId(instance: Produto) {
    instance.id = uuidv4();
  }
}