import { productService } from '#services/index.js';

export const remove = async (req, res, next) => {
  try {
    const { productId } = req.params;

    await productService.remove(productId);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};
