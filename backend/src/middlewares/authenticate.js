import jwt from 'jsonwebtoken';

import { ACCESS_SECRET_KEY } from '#config/env.js';
import { User } from '#models/index.js';
import { HttpError } from '#utils/index.js';

export const authenticate = async (req, res, next) => {
  try {
    const { authorization = '' } = req.headers;
    const [bearer, token] = authorization.split(' ');

    if (bearer !== 'Bearer') {
      throw HttpError(401, 'Not authorized');
    }

    const { id } = jwt.verify(token, ACCESS_SECRET_KEY);

    const user = await User.findById(id);
    if (!user || user.accessToken !== token) {
      throw HttpError(401, 'Not authorized');
    }

    req.user = user;
    next();
  } catch (error) {
    error.status = 401;
    next(error);
  }
};
