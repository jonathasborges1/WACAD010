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
exports.Venda = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const uuid_1 = require("uuid");
const cliente_1 = require("./cliente");
const produto_1 = require("./produto");
// Definir o modelo de Venda
let Venda = exports.Venda = class Venda extends sequelize_typescript_1.Model {
    static generateId(instance) {
        instance.id = (0, uuid_1.v4)();
    }
};
__decorate([
    (0, sequelize_typescript_1.Default)(sequelize_typescript_1.DataType.UUIDV4),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.UUID, primaryKey: true }),
    __metadata("design:type", String)
], Venda.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => cliente_1.Cliente),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.UUID }),
    __metadata("design:type", String)
], Venda.prototype, "cliente_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => produto_1.Produto),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.UUID }),
    __metadata("design:type", String)
], Venda.prototype, "produto_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], Venda.prototype, "data_venda", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => cliente_1.Cliente),
    __metadata("design:type", cliente_1.Cliente)
], Venda.prototype, "cliente", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => produto_1.Produto),
    __metadata("design:type", produto_1.Produto)
], Venda.prototype, "produto", void 0);
__decorate([
    sequelize_typescript_1.BeforeCreate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Venda]),
    __metadata("design:returntype", void 0)
], Venda, "generateId", null);
exports.Venda = Venda = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Venda' })
], Venda);
