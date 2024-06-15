import { supplierService } from '#services/index.js';

export const create = async (req, res, next) => {
  try {
    const result = await supplierService.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
