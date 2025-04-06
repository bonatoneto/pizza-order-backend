import {Request, Response} from 'express';
import { CreateCategoryService } from '../../services/category/CreateCategoryService';

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    if (!name || typeof name !== 'string' || name.trim() ==='') {
      return res.status(400).json({ error: 'Nome da categoria inválido' });
    }

    const createCategoryService = new CreateCategoryService();

    const category = await createCategoryService.execute({
      name: req.body.name,
    });

    return res.json(category);
  }
}

export { CreateCategoryController };