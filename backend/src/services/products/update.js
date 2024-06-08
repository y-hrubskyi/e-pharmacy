import { Product } from '#models/index.js';
import { HttpError } from '#utils/index.js';

export const update = async (productId, update) => {
  const product = await Product.findByIdAndUpdate(productId, update, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    throw HttpError(404, `Product with id=${productId} not found`);
  }

  return product;
};
