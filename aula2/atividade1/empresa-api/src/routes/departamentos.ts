import { Request, Response, Router } from "express";
import { Departamento } from "../models/departamento";

const departamentosRouter: Router = Router();

departamentosRouter.get("/departamentos", async (req: Request, res: Response): Promise<Response> => {
   const todosDepartamentos: Departamento[] = await Departamento.findAll();
   return res.status(200).json(todosDepartamentos);
});

departamentosRouter.get("/departamentos/:id", async (req: Request, res: Response): Promise<Response> => {
   const funcionario: Departamento | null = await Departamento.findByPk(req.params.id);
   if (funcionario) {
      return res.status(200).json(funcionario);
   }
   return res.status(404).json({ error: "Funcionario não encontrado" });
});

departamentosRouter.post(
   "/departamentos",
   async (req: Request, res: Response): Promise<Response> => {
     const departamento: Departamento = await Departamento.create({
       ...req.body,
     });
     return res.status(201).json(departamento);
   }
 );

departamentosRouter.put(
   "/departamentos/:id",
   async (req: Request, res: Response): Promise<Response> => {
     const { id } = req.params;
     await Departamento.update({ ...req.body }, { where: { id } });
     const updatedDepartamento: Departamento | null = await Departamento.findByPk(
       id
     );
     return res.status(200).json(updatedDepartamento);
   }
 );
 
 departamentosRouter.delete(
   "/departamentos/:id",
   async (req: Request, res: Response): Promise<Response> => {
     const { id } = req.params;
     const deletedDepartamento: Departamento | null = await Departamento.findByPk(
       id
     );
     await Departamento.destroy({ where: { id } });
     return res.status(200).json(deletedDepartamento);
   }
 );

export { departamentosRouter };