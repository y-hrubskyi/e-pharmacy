import { productService } from '#services/index.js';

export const create = async (req, res, next) => {
  try {
    const result = await productService.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
