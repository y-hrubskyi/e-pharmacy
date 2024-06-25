import { Supplier } from '#models/index.js';
import { setPaginationOptions } from '#utils/index.js';

export const get = async (page, limit, name) => {
  const filter = {};
  if (name) filter.company = { $regex: name, $options: 'i' };

  const paginationOptions = setPaginationOptions(page, limit);

  const [
    {
      paginatedResult,
      totalCount: [{ totalCount } = { totalCount: 0 }],
    },
  ] = await Supplier.aggregate([
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

  return { paginatedResult, totalCount };
};
