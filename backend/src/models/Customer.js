import { Schema, model } from 'mongoose';
import { isValid, parse } from 'date-fns';

import { Regexps } from '#validators/customerValidator.js';

const dateValidator = [
  function (value) {
    const date = parse(value, 'MMM d, yyyy', new Date());
    return isValid(date);
  },
  'Invalid date format',
];

const customerSchema = new Schema(
  {
    image: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      match: Regexps.NAME,
      required: [true, 'Customer info is required'],
    },
    email: {
      type: String,
      match: Regexps.EMAIL,
      unique: true,
      required: [true, 'Email is required'],
    },
    spent: {
      type: Number,
      min: 0,
      required: [true, 'Spent is required'],
    },
    phone: {
      type: String,
      match: Regexps.PHONE,
      unique: true,
      required: [true, 'Phone is required'],
    },
    address: {
      type: String,
      match: Regexps.ADDRESS,
      required: [true, 'Address is required'],
    },
    registerDate: {
      type: String,
      validate: dateValidator,
      required: [true, 'Register date is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

export const Customer = model('Customer', customerSchema);
