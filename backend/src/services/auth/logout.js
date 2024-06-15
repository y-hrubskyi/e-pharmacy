import { User } from '#models/index.js';

export const logout = async userId => {
  await User.findByIdAndUpdate(userId, { accessToken: '', refreshToken: '' });
};
