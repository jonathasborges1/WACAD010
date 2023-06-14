

import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import { Funcionarios } from "../models/funcionario";
import Projeto from "../models/projetos";
import Departamento from "../models/departamento";

dotenv.config();

const connection = new Sequelize({
	dialect: "mysql",
	host: "localhost",
	username: "root",
	password: "admin",
	database: "wacad0101",
	logging: false,
	models: [Funcionarios, Projeto, Departamento],
});

export default connection;
