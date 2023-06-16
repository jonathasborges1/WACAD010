import { Request, Response, Router } from "express";
import { Venda } from "../models/venda";
import { Produto } from "../models/produto";
import { Cliente } from "../models/cliente";

const vendaRouter: Router = Router();

vendaRouter.get("/venda", async (req: Request, res: Response): Promise<Response> => {
   const vendas = await Venda.findAndCountAll({
      include: [
         Cliente,
         Produto
      ],
      distinct: true,
   });
   return res.status(200).json(vendas);
});

vendaRouter.post("/venda", async (req: Request, res: Response): Promise<Response> => {
   const createdVenda: Venda = await Venda.create({
     ...req.body,
   });
   return res.status(201).json(createdVenda);
 }
);

vendaRouter.put("/venda/:id", async (req: Request, res: Response): Promise<Response> => {
   const { id } = req.params;
   await Venda.update({ ...req.body }, { where: { id } });
   const updatedVenda: Venda | null = await Venda.findByPk(id);
   return res.status(200).json(updatedVenda);
 }
);

vendaRouter.delete("/venda/:id", async (req: Request, res: Response): Promise<Response> => {
   const { id } = req.params;
   const deletedVenda: Venda | null = await Venda.findByPk(id);
   await Venda.destroy({ where: { id } });
   return res.status(200).json(deletedVenda);
 }
);


export { vendaRouter };