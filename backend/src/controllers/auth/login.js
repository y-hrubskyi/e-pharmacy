import { authService } from '#services/index.js';

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const result = await authService.login(email, password);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
