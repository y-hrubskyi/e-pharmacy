import Joi from 'joi';

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
  'Heart',
  'Leg',
  'Medicine',
  'Orthopedic Products',
  'Skin Care',
  'Vitamins & Supplements',
];

export const Enums = {
  CATEGORIES: categories,
};

const productSchema = Joi.object({
  name: Joi.string().pattern(Regexps.NAME).required(),
  category: Joi.string()
    .equal(...Enums.CATEGORIES)
    .required(),
  stock: Joi.number().min(0).required(),
  supplier: Joi.object({
    id: Joi.string().pattern(Regexps.MONGOOSE_OBJECT_ID).required(),
    name: Joi.string().pattern(Regexps.SUPPLIER).required(),
  }),
  price: Joi.number().min(0.01).required(),
});

export const joiSchemas = {
  create: productSchema,
  update: productSchema,
};
