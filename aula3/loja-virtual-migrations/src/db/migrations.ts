export interface MigracaoDB {
   consultas?: Array<{ model: string; query: string }>;
 }
 
 const migracoes: Map<number, MigracaoDB> = new Map<number, MigracaoDB>();
 
 migracoes.set(1, {
   consultas: [
     {
       model: 'Categoria',
       query: `ALTER TABLE categoria ADD sigla VARCHAR(45) AFTER descricao;`,
     },
   ],
 });

 
 export { migracoes };
 