"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_typescript_1 = require("sequelize-typescript");
const funcionario_1 = require("../models/funcionario");
const projetos_1 = __importDefault(require("../models/projetos"));
const departamento_1 = __importDefault(require("../models/departamento"));
dotenv_1.default.config();
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "admin",
    database: "wacad0101",
    logging: false,
    models: [funcionario_1.Funcionarios, projetos_1.default, departamento_1.default],
});
exports.default = connection;
