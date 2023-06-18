

import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";

dotenv.config();

const connection = new Sequelize({
	dialect: "mysql",
	host: "localhost",
	username: "root",
	password: "admin",
	database: "loja-virtual",
	logging: false,
	// models: [Categoria, Produto, Cliente, Venda], // quando se usa migrations não é necessário informar os models
});

export default connection;
