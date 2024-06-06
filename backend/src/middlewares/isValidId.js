import { isValidObjectId } from 'mongoose';

import { HttpError } from '#utils/index.js';

export const isValidId = (req, res, next) => {
  const { supplierId } = req.params;

  if (!isValidObjectId(supplierId)) {
    throw HttpError(400, `'${supplierId}' is not valid id`);
  }

  next();
};
