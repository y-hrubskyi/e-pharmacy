import Joi from 'joi';
import { isValid, parse } from 'date-fns';

export const Regexps = {
  NAME: /^[a-zA-Z0-9_\- ]{3,40}$/,
  ADDRESS: /^[a-zA-Z0-9\s,'-]+$/,
  COMPANY: /^[a-zA-Z0-9_\- ]{3,50}$/,
};

const Statuses = {
  ACTIVE: 'Active',
  DEACTIVE: 'Deactive',
};

export const Enums = {
  STATUSES: Object.values(Statuses),
};

const customDateValidator = (value, helpers) => {
  const date = parse(value, 'MMMM d, yyyy', new Date());
  if (!isValid(date)) {
    return helpers.error('any.invalid');
  }
  return value;
};

const supplierSchema = Joi.object({
  name: Joi.string().pattern(Regexps.NAME).required(),
  address: Joi.string().pattern(Regexps.ADDRESS).required(),
  company: Joi.string().pattern(Regexps.COMPANY).required(),
  date: Joi.string()
    .custom(customDateValidator, 'custom date validation')
    .required(),
  amount: Joi.number().min(0.01).required(),
  status: Joi.string()
    .equal(...Enums.STATUSES)
    .required(),
});

export const joiSchemas = {
  create: supplierSchema,
  update: supplierSchema,
};
