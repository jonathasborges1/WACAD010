"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_typescript_1 = require("sequelize-typescript");
dotenv_1.default.config();
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "admin",
    database: "loja-virtual",
    logging: false,
    // models: [Categoria, Produto, Cliente, Venda], // quando se usa migrations não é necessário informar os models
});
exports.default = connection;
