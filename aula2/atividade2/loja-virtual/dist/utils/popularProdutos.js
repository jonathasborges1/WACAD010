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
Object.defineProperty(exports, "__esModule", { value: true });
exports.popularProdutos = void 0;
const produto_1 = require("../models/produto");
const categoria_1 = require("../models/categoria");
function popularProdutos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Obtenha a categoria desejada do banco de dados
            const eletronicosCategoria = yield categoria_1.Categoria.findOne({ where: { descricao: 'Eletrônicos' } });
            if (!eletronicosCategoria) {
                console.error('Categoria "Eletrônicos" não encontrada.');
                return;
            }
            // Crie os produtos relacionados à categoria de Eletrônicos
            yield produto_1.Produto.bulkCreate([
                { descricao: 'Smartphone', preco: 1500, quantidade: 10, categoria_id: eletronicosCategoria.id, data_criacao: new Date(), data_alteracao: new Date() },
                { descricao: 'Notebook', preco: 2500, quantidade: 5, categoria_id: eletronicosCategoria.id, data_criacao: new Date(), data_alteracao: new Date() },
            ]);
            // Exiba uma mensagem de sucesso
            console.log('Produtos populados com sucesso!');
        }
        catch (error) {
            // Em caso de erro, exiba uma mensagem de erro
            console.error('Erro ao popular Produtos:', error);
        }
        finally { }
    });
}
exports.popularProdutos = popularProdutos;
