

import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import { Categoria } from "../models/categoria";
import { Produto } from "../models/produto";
import { Cliente } from "../models/cliente";
import { Venda } from "../models/venda";

dotenv.config();

const connection = new Sequelize({
	dialect: "mysql",
	host: "localhost",
	username: "root",
	password: "admin",
	database: "loja-virtual",
	logging: false,
	models: [Categoria, Produto, Cliente, Venda],
});

export default connection;
