export const setPaginationOptions = (page, limit) => {
  if (isNaN(parseInt(page)) || page <= 0) page = 1;

  const skip = (page - 1) * limit;
  return {
    skip,
    limit: Number(limit),
  };
};
