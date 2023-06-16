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
exports.popularVendas = void 0;
const venda_1 = require("../models/venda");
const cliente_1 = require("../models/cliente");
const produto_1 = require("../models/produto");
function popularVendas() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Obtenha o cliente desejado do banco de dados
            const cliente = yield cliente_1.Cliente.findOne({ where: { nome: 'João Silva' } });
            if (!cliente) {
                console.error('Cliente não encontrado.');
                return;
            }
            // Obtenha o produto desejado do banco de dados
            const produto = yield produto_1.Produto.findOne({ where: { descricao: 'Notebook' } });
            if (!produto) {
                console.error('Produto não encontrado.');
                return;
            }
            // Crie a venda relacionada ao cliente e produto selecionados
            yield venda_1.Venda.bulkCreate([
                { cliente_id: cliente.id, produto_id: produto.id, data_venda: new Date() },
            ]);
            // Exiba uma mensagem de sucesso
            console.log('Venda populada com sucesso!');
        }
        catch (error) {
            // Em caso de erro, exiba uma mensagem de erro
            console.error('Erro ao popular venda:', error);
        }
        finally { }
    });
}
exports.popularVendas = popularVendas;
