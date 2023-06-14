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
exports.funcionariosRouter = void 0;
const express_1 = require("express");
const funcionario_1 = require("../models/funcionario");
const funcionariosRouter = (0, express_1.Router)();
exports.funcionariosRouter = funcionariosRouter;
funcionariosRouter.get("/funcionarios", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const funcionarios = yield funcionario_1.Funcionarios.findAll();
    return res.status(200).json(funcionarios);
}));
funcionariosRouter.get("/funcionarios/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const funcionario = yield funcionario_1.Funcionarios.findByPk(req.params.id);
    if (funcionario) {
        return res.status(200).json(funcionario);
    }
    return res.status(404).json({ error: "Funcionario não encontrado" });
}));
funcionariosRouter.post("/funcionarios", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const departamento = yield funcionario_1.Funcionarios.create(Object.assign({}, req.body));
    return res.status(201).json(departamento);
}));
funcionariosRouter.put("/funcionarios/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield funcionario_1.Funcionarios.update(Object.assign({}, req.body), { where: { id } });
    const updatedFuncionario = yield funcionario_1.Funcionarios.findByPk(id);
    return res.status(200).json(updatedFuncionario);
}));
funcionariosRouter.delete("/funcionarios/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedFuncionario = yield funcionario_1.Funcionarios.findByPk(id);
    yield funcionario_1.Funcionarios.destroy({ where: { id } });
    return res.status(200).json(deletedFuncionario);
}));
