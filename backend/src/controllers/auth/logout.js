import { authService } from '#services/index.js';

export const logout = async (req, res, next) => {
  try {
    await authService.logout(req.user._id);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};
