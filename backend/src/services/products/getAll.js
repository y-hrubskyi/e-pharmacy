import { Product, Supplier } from '#models/index.js';
import { setPaginationOptions } from '#utils/index.js';
import { Enums } from '#validators/productValidator.js';

export const getAll = async (page, limit, name) => {
  const filter = {};
  if (name) filter.name = { $regex: name, $options: 'i' };

  const paginationOptions = setPaginationOptions(page, limit);

  const [
    {
      paginatedResult,
      totalCount: [{ totalCount } = { totalCount: 0 }],
    },
  ] = await Product.aggregate([
    {
      $facet: {
        paginatedResult: [
          { $match: filter },
          { $sort: { createdAt: -1 } },
          { $skip: paginationOptions.skip },
          { $limit: paginationOptions.limit },
        ],
        totalCount: [{ $match: filter }, { $count: 'totalCount' }],
      },
    },
  ]);

  const suppliers = await Supplier.find({}, 'company').exec();
  const supplierNames = suppliers.map(doc => doc.company);

  return {
    paginatedResult,
    totalCount,
    categories: Enums.CATEGORIES,
    suppliers: supplierNames,
  };
};
