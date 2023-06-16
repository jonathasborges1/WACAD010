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
exports.popularCategorias = void 0;
const categoria_1 = require("../models/categoria");
function popularCategorias() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Crie as categorias
            yield categoria_1.Categoria.bulkCreate([
                { descricao: 'Eletrônicos' },
                { descricao: 'Roupas' },
                { descricao: 'Acessórios' }
            ]);
            // Exiba uma mensagem de sucesso
            console.log('Categorias populadas com sucesso!');
        }
        catch (error) {
            // Em caso de erro, exiba uma mensagem de erro
            console.error('Erro ao popular categorias:', error);
        }
        finally { }
    });
}
exports.popularCategorias = popularCategorias;
