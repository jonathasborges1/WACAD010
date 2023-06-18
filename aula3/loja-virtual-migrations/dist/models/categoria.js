"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const produto_1 = require("./produto");
// Definir o modelo de Categoria
let Categoria = exports.Categoria = class Categoria extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Default)(sequelize_typescript_1.DataType.UUIDV4),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.UUID, primaryKey: true }),
    __metadata("design:type", String)
], Categoria.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(50) }),
    __metadata("design:type", String)
], Categoria.prototype, "descricao", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, field: 'atributo_adicionado' }) // Defina o campo "field" como "atributo_adicionado"
    ,
    __metadata("design:type", Object)
], Categoria.prototype, "atributo_adicionado", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => produto_1.Produto),
    __metadata("design:type", Array)
], Categoria.prototype, "produtos", void 0);
exports.Categoria = Categoria = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'categoria' })
], Categoria);
