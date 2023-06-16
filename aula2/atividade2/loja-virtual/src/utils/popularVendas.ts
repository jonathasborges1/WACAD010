import { Optional } from "sequelize";

import { Venda } from "../models/venda";
import { Cliente } from "../models/cliente";
import { Produto } from "../models/produto";

export async function popularVendas() {
   try {
 
     // Obtenha o cliente desejado do banco de dados
     const cliente = await Cliente.findOne({ where: { nome: 'João Silva' } });
     if (!cliente) {
       console.error('Cliente não encontrado.');
       return;
     }
 
     // Obtenha o produto desejado do banco de dados
     const produto = await Produto.findOne({ where: { descricao: 'Notebook' } });
     if (!produto) {
       console.error('Produto não encontrado.');
       return;
     }
 
     // Crie a venda relacionada ao cliente e produto selecionados
     await Venda.bulkCreate([
       {cliente_id: cliente.id, produto_id: produto.id, data_venda: new Date()},
     ] as (Optional<Venda, 'id'> & { id: string })[]);
 
     // Exiba uma mensagem de sucesso
     console.log('Venda populada com sucesso!');
   } catch (error) {
     // Em caso de erro, exiba uma mensagem de erro
     console.error('Erro ao popular venda:', error);
   } finally {}
}
