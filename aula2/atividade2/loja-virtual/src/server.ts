import express from "express";
import { categoriaRouter } from "./routes/categoria";
import { clienteRouter } from "./routes/cliente";
import { produtoRouter } from "./routes/produto";
import { vendaRouter } from "./routes/venda";

const routes = [
   categoriaRouter,
   clienteRouter,
   produtoRouter,
   vendaRouter,
]

export class Api{

   public server: express.Application;

   constructor(){
      this.server = express();
      this.middleware();
      this.router();
   }
   
   private middleware(){
      this.server.use(express.json());
   }

   private router(){
      this.server.use(routes);
   }
}