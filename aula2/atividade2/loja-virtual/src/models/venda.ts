import { Table, Column, Model, DataType, ForeignKey, BelongsTo, Default, BeforeCreate } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

import { Cliente } from './cliente';
import { Produto } from './produto';

// Definir o modelo de Venda
@Table({ tableName: 'Venda' })
export class Venda extends Model<Venda> {
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, primaryKey: true })
  id!: string;

  @ForeignKey(() => Cliente)
  @Column({ type: DataType.UUID })
  cliente_id!: string;

  @ForeignKey(() => Produto)
  @Column({ type: DataType.UUID })
  produto_id!: string;

  @Column({ type: DataType.DATE }) 
  data_venda!: Date;

  @BelongsTo(() => Cliente)
  cliente!: Cliente;

  @BelongsTo(() => Produto)
  produto!: Produto;

  @BeforeCreate
  static generateId(instance: Venda) {
    instance.id = uuidv4();
  }

}