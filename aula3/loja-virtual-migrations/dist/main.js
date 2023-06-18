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
const server_1 = require("./server");
const api_info_1 = require("./api-info");
const server = new server_1.Api();
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        server.bootstrap().then(() => {
            console.info(`API Empresa rodando na porta ${api_info_1.api.defaultPort}`);
        });
    }
    catch (error) {
        console.error('Server failed to start.');
        console.error(error);
        process.exit(1);
    }
});
void start();
