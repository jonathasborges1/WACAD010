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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Departamento = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const projetos_1 = __importDefault(require("./projetos"));
let Departamento = exports.Departamento = class Departamento extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }),
    __metadata("design:type", Number)
], Departamento.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false
    }),
    __metadata("design:type", String)
], Departamento.prototype, "nome", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false
    }),
    __metadata("design:type", String)
], Departamento.prototype, "sigla", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => projetos_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }),
    __metadata("design:type", Number)
], Departamento.prototype, "projetos_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => projetos_1.default, 'projetos_id'),
    __metadata("design:type", projetos_1.default)
], Departamento.prototype, "projeto", void 0);
exports.Departamento = Departamento = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'departamentos',
        timestamps: true
    })
], Departamento);
exports.default = Departamento;
