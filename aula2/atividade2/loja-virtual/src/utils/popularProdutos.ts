import { Optional } from "sequelize";

import { Produto } from "../models/produto";
import { Categoria } from "../models/categoria";

export async function popularProdutos() {
   try {
     
      // Obtenha a categoria desejada do banco de dados
      const eletronicosCategoria = await Categoria.findOne({ where: { descricao: 'Eletrônicos' } });
      if (!eletronicosCategoria) {
        console.error('Categoria "Eletrônicos" não encontrada.');
        return;
      }

     // Crie os produtos relacionados à categoria de Eletrônicos
      await Produto.bulkCreate([
         { descricao: 'Smartphone', preco: 1500, quantidade: 10, categoria_id: eletronicosCategoria.id, data_criacao: new Date(), data_alteracao: new Date() },
         { descricao: 'Notebook', preco: 2500, quantidade: 5, categoria_id: eletronicosCategoria.id, data_criacao: new Date(), data_alteracao: new Date() },
      ] as (Optional<Produto, 'id'> & { id: string })[]);
 
     // Exiba uma mensagem de sucesso
     console.log('Produtos populados com sucesso!');
   } catch (error) {
     // Em caso de erro, exiba uma mensagem de erro
     console.error('Erro ao popular Produtos:', error);
   } finally {}
}

