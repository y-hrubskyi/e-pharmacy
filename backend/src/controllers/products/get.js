import { productService } from '#services/index.js';

export const get = async (req, res, next) => {
  try {
    const { page = 1, limit = 5, name } = req.query;

    const result = await productService.get(page, limit, name);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
