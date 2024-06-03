import { authService } from '#services/index.js';
import { HttpError } from '#utils/index.js';

export const refresh = async (req, res, next) => {
  try {
    const { authorization = '' } = req.headers;
    const [bearer, token] = authorization.split(' ');

    if (bearer !== 'Bearer') {
      throw HttpError(401, 'Not authorized');
    }

    const result = await authService.refresh(token);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
