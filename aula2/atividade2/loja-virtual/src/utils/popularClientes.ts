import { Optional } from "sequelize";
import connection from "../db/config";
import { Cliente } from "../models/cliente";

export async function popularClientes() {
   try {

      // Crie os clientes
      await Cliente.bulkCreate([
         { nome: 'João Silva', endereco: 'Rua A, 123', email: 'joao@example.com', data_criacao: new Date(), data_alteracao: new Date() },
         { nome: 'Maria Souza', endereco: 'Av. B, 456', email: 'maria@example.com', data_criacao: new Date(), data_alteracao: new Date() },
      ] as (Optional<Cliente, 'id'> & { id: string })[]);
 
     // Exiba uma mensagem de sucesso
     console.log('Clientes populados com sucesso!');
   } catch (error) {
     // Em caso de erro, exiba uma mensagem de erro
     console.error('Erro ao popular categorias:', error);
   } finally {}
}

