import { Table, Column, Model, DataType } from 'sequelize-typescript';
import connection from '../db/config';
// import { Projetos } from '../models/projetos'; // Certifique-se de importar corretamente a classe 'Projetos'

@Table({
  tableName: 'projetos',
  timestamps: true,
})
export class Projetos extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true
  })
  public id!: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: true
  })
  public nome!: string;

  @Column({
    type: DataType.DATE,
    allowNull: true
  })
  public data_inicio!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true
  })
  public data_fim!: Date;
}

export default Projetos;
