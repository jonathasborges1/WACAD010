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
exports.clienteRouter = void 0;
const express_1 = require("express");
const cliente_1 = require("../models/cliente");
const clienteRouter = (0, express_1.Router)();
exports.clienteRouter = clienteRouter;
clienteRouter.get("/cliente", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientes = yield cliente_1.Cliente.findAll();
    return res.status(200).json(clientes);
}));
clienteRouter.post("/cliente", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const createdCliente = yield cliente_1.Cliente.create(Object.assign({}, req.body));
    return res.status(201).json(createdCliente);
}));
clienteRouter.put("/cliente/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield cliente_1.Cliente.update(Object.assign({}, req.body), { where: { id } });
    const updatedCliente = yield cliente_1.Cliente.findByPk(id);
    return res.status(200).json(updatedCliente);
}));
clienteRouter.delete("/cliente/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedCliente = yield cliente_1.Cliente.findByPk(id);
    yield cliente_1.Cliente.destroy({ where: { id } });
    return res.status(200).json(deletedCliente);
}));
