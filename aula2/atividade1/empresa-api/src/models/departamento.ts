import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

import Projeto from './projetos';

@Table({
  tableName: 'departamentos',
  timestamps: true
})

export class Departamento extends Model {
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  })
  public id!: number;

  @Column({
    type: DataTypes.STRING(45),
    allowNull: false
  })
  public nome!: string;

  @Column({
    type: DataTypes.STRING(45),
    allowNull: false
  })
  public sigla!: string;

  @ForeignKey(() => Projeto)
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false
  })
  public projetos_id!: number;

  @BelongsTo(() => Projeto, 'projetos_id')
  public projeto!: Projeto;
}

export default Departamento;
