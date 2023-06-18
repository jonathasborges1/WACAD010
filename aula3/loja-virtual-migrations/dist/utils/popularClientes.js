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
exports.popularClientes = void 0;
const cliente_1 = require("../models/cliente");
function popularClientes() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Crie os clientes
            yield cliente_1.Cliente.bulkCreate([
                { nome: 'João Silva', endereco: 'Rua A, 123', email: 'joao@example.com', data_criacao: new Date(), data_alteracao: new Date() },
                { nome: 'Maria Souza', endereco: 'Av. B, 456', email: 'maria@example.com', data_criacao: new Date(), data_alteracao: new Date() },
            ]);
            // Exiba uma mensagem de sucesso
            console.log('Clientes populados com sucesso!');
        }
        catch (error) {
            // Em caso de erro, exiba uma mensagem de erro
            console.error('Erro ao popular categorias:', error);
        }
        finally { }
    });
}
exports.popularClientes = popularClientes;
