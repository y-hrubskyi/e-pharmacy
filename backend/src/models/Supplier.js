import { Schema, model } from 'mongoose';
import { isValid, parse } from 'date-fns';

import { Regexps, Enums } from '#validators/supplierValidator.js';

const dateValidator = [
  function (value) {
    const date = parse(value, 'MMMM d, yyyy', new Date());
    return isValid(date);
  },
  'Invalid date format',
];

const supplierSchema = new Schema(
  {
    name: {
      type: String,
      match: Regexps.NAME,
      required: [true, 'Supplier info is required'],
    },
    address: {
      type: String,
      match: Regexps.ADDRESS,
      required: [true, 'Address is required'],
    },
    company: {
      type: String,
      match: Regexps.COMPANY,
      required: [true, 'Company is required'],
    },
    date: {
      type: String,
      validate: dateValidator,
      required: [true, 'Delivery date is required'],
    },
    amount: {
      type: Number,
      min: 0.01,
      required: [true, 'Amount is required'],
    },
    status: {
      type: String,
      enum: Enums.STATUSES,
      required: [true, 'Status is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

export const Supplier = model('Supplier', supplierSchema);
