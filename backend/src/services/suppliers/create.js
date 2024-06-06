import { Supplier } from '#models/index.js';

export const create = async newSupplier => {
  const supplier = await Supplier.create(newSupplier);
  return supplier;
};
