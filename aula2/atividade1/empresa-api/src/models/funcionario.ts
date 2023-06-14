import {
	Table,
	Model,
	Column,
	DataType,
	IsUUID,
	PrimaryKey,
	AllowNull,
	IsEmail,
	Unique,
} from "sequelize-typescript";

@Table({
   tableName: 'funcionarios',
	timestamps: true,
})
export class Funcionarios extends Model {
	@IsUUID("all")
	@PrimaryKey
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV1,
	})
	id!: string;

	@AllowNull(false)
	@Column({
		type: DataType.STRING,
	})
	name!: string;

	@AllowNull(false)
	@Column({
		type: DataType.STRING,
	})
	fone!: string;
	
   @AllowNull(false)
	@Unique
	@IsEmail
	@Column({
		type: DataType.STRING,
	})
	email!: string;
	
   @AllowNull(false)
	@Column({
		type: DataType.INTEGER,
	})
	idade!: number;
}
