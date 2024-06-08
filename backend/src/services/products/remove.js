import { Product } from '#models/index.js';
import { HttpError } from '#utils/index.js';

export const remove = async productId => {
  const product = await Product.findByIdAndDelete(productId);

  if (!product) {
    throw HttpError(404, `Product with id=${productId} not found`);
  }

  return product;
};
