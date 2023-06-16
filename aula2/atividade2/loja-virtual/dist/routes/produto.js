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
exports.produtoRouter = void 0;
const express_1 = require("express");
const produto_1 = require("../models/produto");
const categoria_1 = require("../models/categoria");
const produtoRouter = (0, express_1.Router)();
exports.produtoRouter = produtoRouter;
produtoRouter.get("/produto", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const produtos = yield produto_1.Produto.findAndCountAll({
        include: [
            categoria_1.Categoria,
        ],
        distinct: true,
    });
    return res.status(200).json(produtos);
}));
produtoRouter.post("/produto", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const createdProduto = yield produto_1.Produto.create(Object.assign({}, req.body));
    return res.status(201).json(createdProduto);
}));
produtoRouter.put("/produto/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield produto_1.Produto.update(Object.assign({}, req.body), { where: { id } });
    const updatedProduto = yield produto_1.Produto.findByPk(id);
    return res.status(200).json(updatedProduto);
}));
produtoRouter.delete("/produto/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedProduto = yield produto_1.Produto.findByPk(id);
    yield produto_1.Produto.destroy({ where: { id } });
    return res.status(200).json(deletedProduto);
}));
