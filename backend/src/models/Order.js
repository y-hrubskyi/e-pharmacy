import { Schema, model } from 'mongoose';
import { isValid, parse } from 'date-fns';

import { Regexps, Enums } from '#validators/orderValidator.js';

const dateValidator = [
  function (value) {
    const date = parse(value, 'MMMM d, yyyy', new Date());
    return isValid(date);
  },
  'Invalid date format',
];

const orderSchema = new Schema(
  {
    customer: {
      id: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: [true, 'Customer info is required'],
      },
      photo: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        match: Regexps.NAME,
        required: [true, 'Customer info is required'],
      },
      address: {
        type: String,
        match: Regexps.ADDRESS,
        required: [true, 'Address is required'],
      },
    },
    products: {
      type: Number,
      min: 1,
      required: [true, 'Products is required'],
    },
    price: {
      type: Number,
      min: 0.1,
      required: [true, 'Price is required'],
    },
    status: {
      type: String,
      enum: Enums.STATUSES,
      required: [true, 'Status is required'],
    },
    orderDate: {
      type: String,
      validate: dateValidator,
      required: [true, 'Order date is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

export const Order = model('Order', orderSchema);
