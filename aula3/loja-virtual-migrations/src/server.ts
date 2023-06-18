import express from "express";
import { categoriaRouter } from "./routes/categoria";
import { clienteRouter } from "./routes/cliente";
import { produtoRouter } from "./routes/produto";
import { vendaRouter } from "./routes/venda";
import connection from "./db/config";
import { VersaoDB } from "./models/versaoDB";
import { Categoria } from "./models/categoria";
import { Cliente } from "./models/cliente";
import { Produto } from "./models/produto";
import { Venda } from "./models/venda";
import { api } from "./api-info";
import { MigracaoDB, migracoes } from "./db/migrations";
import { popularCategorias } from "./utils/popularCategorias";
import { popularClientes } from "./utils/popularClientes";
import { popularProdutos } from "./utils/popularProdutos";
import { popularVendas } from "./utils/popularVendas";

const routes = [
   categoriaRouter,
   clienteRouter,
   produtoRouter,
   vendaRouter,
]

const models = [VersaoDB, Categoria, Cliente, Produto, Venda];

export class Api{

   public server: express.Application;
   public publicPath: string;

   constructor(){
      this.server = express();
      this.publicPath = `${process.cwd()}/public`;
   }

   async bootstrap(): Promise<Api> {
      try {
        await this.middleware();
        await this.router();
        await this.initModels();
        await this.migrations();
        await this.middlewarePopulate();
      } catch (err) {
        console.error("class Api > bootstrap > ", err);
      }
  
      return this;
    }
   
    private async middlewarePopulate(){
      await connection.sync();

      // Verificar se já existem categorias no banco de dados
      const categoriasExistentes = await Categoria.findAll();
      if (categoriasExistentes.length === 0) {
         // Não há categorias no banco de dados, então popule as categorias
         await popularCategorias();
         console.log("Categorias populadas com sucesso!");
      }

      // Verificar se já existem clientes no banco de dados
      const clientesExistentes = await Cliente.findAll();
      if (clientesExistentes.length === 0) {
         // Não há clientes no banco de dados, então popule os clientes
         await popularClientes();
         console.log("Clientes populados com sucesso!");
      }

      // Verificar se já existem clientes no banco de dados
      const produtosExistentes = await Produto.findAll();
      if (produtosExistentes.length === 0) {
         // Não há clientes no banco de dados, então popule os clientes
         await popularProdutos();
         console.log("Produtos populados com sucesso!");
      }

      // Verificar se já existem Vendas no banco de dados
      const vendasExistentes = await Venda.findAll();
      if (vendasExistentes.length === 0) {
         // Não há clientes no banco de dados, então popule os clientes
         await popularVendas();
         console.log("Vendas populadas com sucesso!");
      }
    }

   private middleware(){
      this.server.use(express.json());
   }

   private router(){
      this.server.use(routes);
      try {
         this.server.listen(api.defaultPort);
       } catch (err) {
         console.error(err);
         throw err;
       }
   }

   private async initModels() {
      await connection
        .authenticate()
        .then(async () => {
          console.info('MySQL DB Conectado!');
          await connection.addModels(models);
          await connection.sync();
          console.log('Lista de modelos adicionados:', connection.models);
        })
        .then(() => {
          console.info('DB sync!');
        })
        .catch((err) => {
          console.error("class Api > initModels > ",err);
          throw err;
        });
    }

    private async migrations() {
      const versaoAtualBanco = await VersaoDB.findByPk(api.db.id);
  
      const numeroVersaoAtualBanco = versaoAtualBanco == null ? 0 : versaoAtualBanco.numeroVersao;
      console.info('VERSAO DO BANCO LOJA-VIRTUAL-API: ' + numeroVersaoAtualBanco);
      console.info('api.db.dbVersion: ' + api.db.dbVersion);

      if (numeroVersaoAtualBanco < api.db.dbVersion) {
        console.info(migracoes);
        const models: string[] = [];
  
        for (let i = numeroVersaoAtualBanco; i < api.db.dbVersion; i++) {
          const migracao: MigracaoDB | undefined = migracoes.get(i + 1);
          console.log('Migracao > ', migracao);

          if (migracao && migracao.consultas) {
            if (migracao.consultas !== null) {
              for (const consulta of migracao.consultas) {
                console.info('executando: ' + consulta.query);
                if (models.indexOf(consulta.model) < 0) {
                  models.push(consulta.model); // Adicionar o modelo à lista 'models'
                  await connection.query(consulta.query);
                  console.info('  executed!');
                } else {
                  console.info('  not executed: new model.');
                }
              }
            }
          }

        }
  
        if (versaoAtualBanco == null) {
          await VersaoDB.create({
            id: api.db.id,
            numeroVersao: api.db.dbVersion,
          });
        } else {
          versaoAtualBanco.numeroVersao = api.db.dbVersion;
          await versaoAtualBanco.save();
        }
      }
  
      await connection
        .sync()
        .then(() => {
          console.info('Models sync!');
        })
        .catch((error) => {
          console.error(error);
        });
    }
}