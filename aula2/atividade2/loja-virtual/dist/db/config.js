"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_typescript_1 = require("sequelize-typescript");
const categoria_1 = require("../models/categoria");
const produto_1 = require("../models/produto");
const cliente_1 = require("../models/cliente");
const venda_1 = require("../models/venda");
dotenv_1.default.config();
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "admin",
    database: "loja-virtual",
    logging: false,
    models: [categoria_1.Categoria, produto_1.Produto, cliente_1.Cliente, venda_1.Venda],
});
exports.default = connection;
