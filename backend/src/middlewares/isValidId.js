import { isValidObjectId } from 'mongoose';

import { HttpError } from '#utils/index.js';

export const isValidId = paramId => {
  return (req, res, next) => {
    const id = req.params[paramId];

    if (!isValidObjectId(id)) {
      throw HttpError(400, `'${id}' is not valid id`);
    }

    next();
  };
};
