import { Request, Response, Router } from "express";
import { Produto } from "../models/produto";
import { Categoria } from "../models/categoria";

const produtoRouter: Router = Router();

produtoRouter.get("/produto", async (req: Request, res: Response): Promise<Response> => {
   const produtos= await Produto.findAndCountAll({
      include: [
         Categoria,
      ],
      distinct: true,
   });
   return res.status(200).json(produtos);
});

produtoRouter.post("/produto", async (req: Request, res: Response): Promise<Response> => {
   const createdProduto: Produto = await Produto.create({
     ...req.body,
   });
   return res.status(201).json(createdProduto);
 }
);

produtoRouter.put("/produto/:id", async (req: Request, res: Response): Promise<Response> => {
   const { id } = req.params;
   await Produto.update({ ...req.body }, { where: { id } });
   const updatedProduto: Produto | null = await Produto.findByPk(id);
   return res.status(200).json(updatedProduto);
 }
);

produtoRouter.delete("/produto/:id", async (req: Request, res: Response): Promise<Response> => {
   const { id } = req.params;
   const deletedProduto: Produto | null = await Produto.findByPk(id);
   await Produto.destroy({ where: { id } });
   return res.status(200).json(deletedProduto);
 }
);

export { produtoRouter };