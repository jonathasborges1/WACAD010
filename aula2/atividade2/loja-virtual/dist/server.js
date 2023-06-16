"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const express_1 = __importDefault(require("express"));
const categoria_1 = require("./routes/categoria");
const cliente_1 = require("./routes/cliente");
const produto_1 = require("./routes/produto");
const venda_1 = require("./routes/venda");
const routes = [
    categoria_1.categoriaRouter,
    cliente_1.clienteRouter,
    produto_1.produtoRouter,
    venda_1.vendaRouter,
];
class Api {
    constructor() {
        this.server = (0, express_1.default)();
        this.middleware();
        this.router();
    }
    middleware() {
        this.server.use(express_1.default.json());
    }
    router() {
        this.server.use(routes);
    }
}
exports.Api = Api;
