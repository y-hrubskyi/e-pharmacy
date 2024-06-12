import { dashboardService } from '#services/index.js';

export const get = async (req, res, next) => {
  try {
    const result = await dashboardService.get();
    res.json(result);
  } catch (error) {
    next(error);
  }
};
