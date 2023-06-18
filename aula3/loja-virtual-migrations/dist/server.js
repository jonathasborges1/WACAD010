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
exports.Api = void 0;
const express_1 = __importDefault(require("express"));
const categoria_1 = require("./routes/categoria");
const cliente_1 = require("./routes/cliente");
const produto_1 = require("./routes/produto");
const venda_1 = require("./routes/venda");
const config_1 = __importDefault(require("./db/config"));
const versaoDB_1 = require("./models/versaoDB");
const categoria_2 = require("./models/categoria");
const cliente_2 = require("./models/cliente");
const produto_2 = require("./models/produto");
const venda_2 = require("./models/venda");
const api_info_1 = require("./api-info");
const migrations_1 = require("./db/migrations");
const popularCategorias_1 = require("./utils/popularCategorias");
const popularClientes_1 = require("./utils/popularClientes");
const popularProdutos_1 = require("./utils/popularProdutos");
const popularVendas_1 = require("./utils/popularVendas");
const routes = [
    categoria_1.categoriaRouter,
    cliente_1.clienteRouter,
    produto_1.produtoRouter,
    venda_1.vendaRouter,
];
const models = [versaoDB_1.VersaoDB, categoria_2.Categoria, cliente_2.Cliente, produto_2.Produto, venda_2.Venda];
class Api {
    constructor() {
        this.server = (0, express_1.default)();
        this.publicPath = `${process.cwd()}/public`;
    }
    bootstrap() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.middleware();
                yield this.router();
                yield this.initModels();
                yield this.migrations();
                //   await this.middlewarePopulate();
            }
            catch (err) {
                console.error("class Api > bootstrap > ", err);
            }
            return this;
        });
    }
    middlewarePopulate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield config_1.default.sync();
            // Verificar se já existem categorias no banco de dados
            const categoriasExistentes = yield categoria_2.Categoria.findAll();
            if (categoriasExistentes.length === 0) {
                // Não há categorias no banco de dados, então popule as categorias
                yield (0, popularCategorias_1.popularCategorias)();
                console.log("Categorias populadas com sucesso!");
            }
            // Verificar se já existem clientes no banco de dados
            const clientesExistentes = yield cliente_2.Cliente.findAll();
            if (clientesExistentes.length === 0) {
                // Não há clientes no banco de dados, então popule os clientes
                yield (0, popularClientes_1.popularClientes)();
                console.log("Clientes populados com sucesso!");
            }
            // Verificar se já existem clientes no banco de dados
            const produtosExistentes = yield produto_2.Produto.findAll();
            if (produtosExistentes.length === 0) {
                // Não há clientes no banco de dados, então popule os clientes
                yield (0, popularProdutos_1.popularProdutos)();
                console.log("Produtos populados com sucesso!");
            }
            // Verificar se já existem Vendas no banco de dados
            const vendasExistentes = yield venda_2.Venda.findAll();
            if (vendasExistentes.length === 0) {
                // Não há clientes no banco de dados, então popule os clientes
                yield (0, popularVendas_1.popularVendas)();
                console.log("Vendas populadas com sucesso!");
            }
        });
    }
    middleware() {
        this.server.use(express_1.default.json());
    }
    router() {
        this.server.use(routes);
        try {
            this.server.listen(api_info_1.api.defaultPort);
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }
    initModels() {
        return __awaiter(this, void 0, void 0, function* () {
            yield config_1.default
                .authenticate()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                console.info('MySQL DB Conectado!');
                yield config_1.default.addModels(models);
                yield config_1.default.sync();
                console.log('Lista de modelos adicionados:', config_1.default.models);
            }))
                .then(() => {
                console.info('DB sync!');
            })
                .catch((err) => {
                console.error("class Api > initModels > ", err);
                throw err;
            });
        });
    }
    migrations() {
        return __awaiter(this, void 0, void 0, function* () {
            const versaoAtualBanco = yield versaoDB_1.VersaoDB.findByPk(api_info_1.api.db.id);
            const numeroVersaoAtualBanco = versaoAtualBanco == null ? 0 : versaoAtualBanco.numeroVersao;
            console.info('VERSAO DO BANCO LOJA-VIRTUAL-API: ' + numeroVersaoAtualBanco);
            console.info('api.db.dbVersion: ' + api_info_1.api.db.dbVersion);
            if (numeroVersaoAtualBanco < api_info_1.api.db.dbVersion) {
                console.info(migrations_1.migracoes);
                const models = [];
                for (let i = numeroVersaoAtualBanco; i < api_info_1.api.db.dbVersion; i++) {
                    const migracao = migrations_1.migracoes.get(i + 1);
                    console.log('Migracao > ', migracao);
                    if (migracao && migracao.consultas) {
                        if (migracao.consultas !== null) {
                            for (const consulta of migracao.consultas) {
                                console.info('executando: ' + consulta.query);
                                if (models.indexOf(consulta.model) < 0) {
                                    models.push(consulta.model); // Adicionar o modelo à lista 'models'
                                    yield config_1.default.query(consulta.query);
                                    console.info('  executed!');
                                }
                                else {
                                    console.info('  not executed: new model.');
                                }
                            }
                        }
                    }
                }
                if (versaoAtualBanco == null) {
                    yield versaoDB_1.VersaoDB.create({
                        id: api_info_1.api.db.id,
                        numeroVersao: api_info_1.api.db.dbVersion,
                    });
                }
                else {
                    versaoAtualBanco.numeroVersao = api_info_1.api.db.dbVersion;
                    yield versaoAtualBanco.save();
                }
            }
            yield config_1.default
                .sync()
                .then(() => {
                console.info('Models sync!');
            })
                .catch((error) => {
                console.error(error);
            });
        });
    }
}
exports.Api = Api;
