import jwt from 'jsonwebtoken';

import { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } from '#config/env.js';
import { User } from '#models/index.js';
import { HttpError } from '#utils/index.js';

export const refresh = async refreshToken => {
  try {
    jwt.verify(refreshToken, REFRESH_SECRET_KEY);

    const user = await User.findOne({ refreshToken });
    if (!user) {
      throw HttpError(403);
    }

    const payload = { id: user._id };
    const newAccessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
      expiresIn: '15m',
    });
    const newRefreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
      expiresIn: '7d',
    });

    const update = {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
    await User.findByIdAndUpdate(user._id, update);

    return update;
  } catch (error) {
    error.status = 403;
    throw error;
  }
};
