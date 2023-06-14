"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const express_1 = __importDefault(require("express"));
const funcionarios_1 = require("./routes/funcionarios");
const routes = [
    funcionarios_1.funcionariosRouter,
    // dependetesRouter,
    // projetoRouter,
    // departamentosRouter,
];
class Api {
    constructor() {
        this.server = (0, express_1.default)();
        this.middleware();
        this.router();
    }
    middleware() {
        this.server.use(express_1.default.json());
    }
    router() {
        this.server.use(routes);
    }
}
exports.Api = Api;
