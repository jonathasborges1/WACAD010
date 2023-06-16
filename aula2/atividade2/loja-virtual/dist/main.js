"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const config_1 = __importDefault(require("./db/config"));
const categoria_1 = require("./models/categoria");
const cliente_1 = require("./models/cliente");
const produto_1 = require("./models/produto");
const venda_1 = require("./models/venda");
const popularCategorias_1 = require("./utils/popularCategorias");
const popularClientes_1 = require("./utils/popularClientes");
const popularProdutos_1 = require("./utils/popularProdutos");
const popularVendas_1 = require("./utils/popularVendas");
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield config_1.default.sync();
        // Verificar se já existem categorias no banco de dados
        const categoriasExistentes = yield categoria_1.Categoria.findAll();
        if (categoriasExistentes.length === 0) {
            // Não há categorias no banco de dados, então popule as categorias
            yield (0, popularCategorias_1.popularCategorias)();
            console.log("Categorias populadas com sucesso!");
        }
        // Verificar se já existem clientes no banco de dados
        const clientesExistentes = yield cliente_1.Cliente.findAll();
        if (clientesExistentes.length === 0) {
            // Não há clientes no banco de dados, então popule os clientes
            yield (0, popularClientes_1.popularClientes)();
            console.log("Clientes populados com sucesso!");
        }
        // Verificar se já existem clientes no banco de dados
        const produtosExistentes = yield produto_1.Produto.findAll();
        if (produtosExistentes.length === 0) {
            // Não há clientes no banco de dados, então popule os clientes
            yield (0, popularProdutos_1.popularProdutos)();
            console.log("Produtos populados com sucesso!");
        }
        // Verificar se já existem Vendas no banco de dados
        const vendasExistentes = yield venda_1.Venda.findAll();
        if (vendasExistentes.length === 0) {
            // Não há clientes no banco de dados, então popule os clientes
            yield (0, popularVendas_1.popularVendas)();
            console.log("Vendas populadas com sucesso!");
        }
        new server_1.Api().server.listen(3000, () => {
            console.log("Server started on port 3000");
        });
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
});
void start();
