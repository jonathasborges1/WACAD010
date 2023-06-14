import { Request, Response, Router } from "express";
import { Funcionarios } from "../models/funcionario";

const funcionariosRouter: Router = Router();

funcionariosRouter.get(
	"/funcionarios",
	async (req: Request, res: Response): Promise<Response> => {
		const funcionarios: Funcionarios[] = await Funcionarios.findAll();
		return res.status(200).json(funcionarios);
	}
);

funcionariosRouter.get(
	"/funcionarios/:id",
	async (req: Request, res: Response): Promise<Response> => {
		const funcionario: Funcionarios | null = await Funcionarios.findByPk(
			req.params.id
		);
		if (funcionario) {
			return res.status(200).json(funcionario);
		}
		return res.status(404).json({ error: "Funcionario não encontrado" });
	}
);

funcionariosRouter.post(
	"/funcionarios",
	async (req: Request, res: Response): Promise<Response> => {
		const departamento: Funcionarios = await Funcionarios.create({
			...req.body,
		});
		return res.status(201).json(departamento);
	}
);

funcionariosRouter.put(
	"/funcionarios/:id",
	async (req: Request, res: Response): Promise<Response> => {
		const { id } = req.params;
		await Funcionarios.update({ ...req.body }, { where: { id } });
		const updatedFuncionario: Funcionarios | null =
			await Funcionarios.findByPk(id);
		return res.status(200).json(updatedFuncionario);
	}
);

funcionariosRouter.delete(
	"/funcionarios/:id",
	async (req: Request, res: Response): Promise<Response> => {
		const { id } = req.params;
		const deletedFuncionario: Funcionarios | null =
			await Funcionarios.findByPk(id);
		await Funcionarios.destroy({ where: { id } });
		return res.status(200).json(deletedFuncionario);
	}
);

export { funcionariosRouter };
