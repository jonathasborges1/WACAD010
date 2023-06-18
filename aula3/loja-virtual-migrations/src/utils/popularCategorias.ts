import { Optional } from "sequelize";
import connection from "../db/config";
import { Categoria } from "../models/categoria";

export async function popularCategorias() {
   try {

     // Crie as categorias
     await Categoria.bulkCreate([
      { descricao: 'Eletrônicos' },
      { descricao: 'Roupas' },
      { descricao: 'Acessórios' }
    ] as (Optional<Categoria, 'id'> & { id: number })[]);
 
     // Exiba uma mensagem de sucesso
     console.log('Categorias populadas com sucesso!');
   } catch (error) {
     // Em caso de erro, exiba uma mensagem de erro
     console.error('Erro ao popular categorias:', error);
   } finally {}
}

