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
exports.departamentosRouter = void 0;
const express_1 = require("express");
const departamento_1 = require("../models/departamento");
const departamentosRouter = (0, express_1.Router)();
exports.departamentosRouter = departamentosRouter;
departamentosRouter.get("/departamentos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todosDepartamentos = yield departamento_1.Departamento.findAll();
    return res.status(200).json(todosDepartamentos);
}));
departamentosRouter.get("/departamentos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const funcionario = yield departamento_1.Departamento.findByPk(req.params.id);
    if (funcionario) {
        return res.status(200).json(funcionario);
    }
    return res.status(404).json({ error: "Funcionario não encontrado" });
}));
departamentosRouter.post("/departamentos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const departamento = yield departamento_1.Departamento.create(Object.assign({}, req.body));
    return res.status(201).json(departamento);
}));
departamentosRouter.put("/departamentos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield departamento_1.Departamento.update(Object.assign({}, req.body), { where: { id } });
    const updatedDepartamento = yield departamento_1.Departamento.findByPk(id);
    return res.status(200).json(updatedDepartamento);
}));
departamentosRouter.delete("/departamentos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedDepartamento = yield departamento_1.Departamento.findByPk(id);
    yield departamento_1.Departamento.destroy({ where: { id } });
    return res.status(200).json(deletedDepartamento);
}));
