import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } from '#config/env.js';
import { User } from '#models/index.js';
import { HttpError } from '#utils/index.js';

export const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, 'Email or password is wrong');
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw HttpError(401, 'Email or password is wrong');
  }

  const payload = { id: user._id };
  const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
    expiresIn: '15m',
  });
  const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
    expiresIn: '7d',
  });

  await User.findByIdAndUpdate(user._id, { accessToken, refreshToken });

  return {
    tokens: {
      accessToken,
      refreshToken,
    },
    user: {
      name: user.name,
      email: user.email,
    },
  };
};
