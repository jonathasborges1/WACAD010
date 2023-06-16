
import { Api } from "./server"
import connection from "./db/config";

import { Categoria } from "./models/categoria";
import { Cliente } from "./models/cliente";
import { Produto } from "./models/produto";
import { Venda } from "./models/venda";

import { popularCategorias } from "./utils/popularCategorias";
import { popularClientes } from "./utils/popularClientes";
import { popularProdutos } from "./utils/popularProdutos";
import { popularVendas } from "./utils/popularVendas";

const start = async (): Promise<void> => {
   try {
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
      
      new Api().server.listen(3000, () => {
         console.log("Server started on port 3000");
      });

   } catch (error) {
      console.error(error);
      process.exit(1);
   }
};

void start();