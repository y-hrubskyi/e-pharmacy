import Joi from 'joi';

export const Regexps = {
  NAME: /^[a-zA-Z0-9_\- ]{3,30}$/,
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/,
};

const loginSchema = Joi.object({
  email: Joi.string().pattern(Regexps.EMAIL).required(),
  password: Joi.string().pattern(Regexps.PASSWORD).required(),
});

export const joiSchemas = {
  login: loginSchema,
};
