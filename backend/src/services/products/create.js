import { Product } from '#models/index.js';

export const create = async newProduct => {
  const product = await Product.create(newProduct);
  return product;
};
