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
exports.vendaRouter = void 0;
const express_1 = require("express");
const venda_1 = require("../models/venda");
const produto_1 = require("../models/produto");
const cliente_1 = require("../models/cliente");
const vendaRouter = (0, express_1.Router)();
exports.vendaRouter = vendaRouter;
vendaRouter.get("/venda", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vendas = yield venda_1.Venda.findAndCountAll({
        include: [
            cliente_1.Cliente,
            produto_1.Produto
        ],
        distinct: true,
    });
    return res.status(200).json(vendas);
}));
vendaRouter.post("/venda", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const createdVenda = yield venda_1.Venda.create(Object.assign({}, req.body));
    return res.status(201).json(createdVenda);
}));
vendaRouter.put("/venda/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield venda_1.Venda.update(Object.assign({}, req.body), { where: { id } });
    const updatedVenda = yield venda_1.Venda.findByPk(id);
    return res.status(200).json(updatedVenda);
}));
vendaRouter.delete("/venda/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedVenda = yield venda_1.Venda.findByPk(id);
    yield venda_1.Venda.destroy({ where: { id } });
    return res.status(200).json(deletedVenda);
}));
