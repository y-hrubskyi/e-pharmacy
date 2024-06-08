import { productService } from '#services/index.js';

export const update = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const result = await productService.update(productId, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
