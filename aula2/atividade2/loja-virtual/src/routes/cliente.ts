import { Request, Response, Router } from "express";
import { Cliente } from "../models/cliente";

const clienteRouter: Router = Router();

clienteRouter.get("/cliente", async (req: Request, res: Response): Promise<Response> => {
   const clientes: Cliente[] = await Cliente.findAll();
   return res.status(200).json(clientes);
});

clienteRouter.post("/cliente", async (req: Request, res: Response): Promise<Response> => {
   const createdCliente: Cliente = await Cliente.create({
     ...req.body,
   });
   return res.status(201).json(createdCliente);
 }
);

clienteRouter.put("/cliente/:id", async (req: Request, res: Response): Promise<Response> => {
   const { id } = req.params;
   await Cliente.update({ ...req.body }, { where: { id } });
   const updatedCliente: Cliente | null = await Cliente.findByPk(id);
   return res.status(200).json(updatedCliente);
 }
);

clienteRouter.delete("/cliente/:id", async (req: Request, res: Response): Promise<Response> => {
   const { id } = req.params;
   const deletedCliente: Cliente | null = await Cliente.findByPk(id);
   await Cliente.destroy({ where: { id } });
   return res.status(200).json(deletedCliente);
 }
);

export { clienteRouter };