import { Table, Column, Model, DataType, Default, BeforeCreate } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

// Definir o modelo de Cliente
@Table({ tableName: 'cliente' })
export class Cliente extends Model<Cliente> {
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, primaryKey: true })
  id!: string;

  @Column({ type: DataType.STRING(50) })
  nome!: string;

  @Column({ type: DataType.STRING(100) })
  endereco!: string;

  @Column({ type: DataType.STRING(50) })
  email!: string;

  @Column({ type: DataType.DATE })
  data_criacao!: Date;

  @Column({ type: DataType.DATE })
  data_alteracao!: Date;

  @BeforeCreate
  static generateId(instance: Cliente) {
    instance.id = uuidv4();
  }
}