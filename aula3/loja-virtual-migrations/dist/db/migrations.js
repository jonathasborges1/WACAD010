"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migracoes = void 0;
const migracoes = new Map();
exports.migracoes = migracoes;
migracoes.set(1, {
    consultas: [
        {
            model: 'Categoria',
            query: `ALTER TABLE categoria ADD atributo_adicionado VARCHAR(45) AFTER descricao;`,
        },
    ],
});
