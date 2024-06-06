import { supplierService } from '#services/index.js';

export const update = async (req, res, next) => {
  try {
    const { supplierId } = req.params;

    const result = await supplierService.update(supplierId, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
