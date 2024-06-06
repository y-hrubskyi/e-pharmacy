import { Supplier } from '#models/index.js';
import { HttpError } from '#utils/index.js';

export const update = async (supplierId, update) => {
  const supplier = await Supplier.findByIdAndUpdate(supplierId, update, {
    new: true,
    runValidators: true,
  });

  if (!supplier) {
    throw HttpError(404, `Supplier with id=${supplierId} not found`);
  }

  return supplier;
};
