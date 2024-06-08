export const Regexps = {
  NAME: /^[a-zA-Z0-9_\- ]{3,30}$/,
  SUPPLIER: /^[a-zA-Z0-9_\- ]{3,30}$/,
  MONGOOSE_OBJECT_ID: /^[0-9a-fA-F]{24}$/,
};

const categories = [
  'Baby Care',
  'Dental Care',
  'Eye Care',
  'Hand',
  'Head',
  'Medicine',
  'Orthopedic Products',
  'Skin Care',
  'Vitamins & Supplements',
];

export const Enums = {
  CATEGORIES: categories,
};
