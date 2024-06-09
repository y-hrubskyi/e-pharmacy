import { Schema, model } from 'mongoose';

import { Regexps, Enums } from '#validators/productValidator.js';

const productSchema = new Schema(
  {
    photo: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      match: Regexps.NAME,
      required: [true, 'Product info is required'],
    },
    category: {
      type: String,
      enum: Enums.CATEGORIES,
      required: [true, 'Category is required'],
    },
    stock: {
      type: Number,
      min: 0,
      required: [true, 'Stock is required'],
    },
    supplier: {
      id: {
        type: Schema.Types.ObjectId,
        ref: 'Supplier',
        required: [true, 'Supplier info is required'],
      },
      name: {
        type: String,
        match: Regexps.SUPPLIER,
        required: [true, 'Supplier info is required'],
      },
    },
    price: {
      type: Number,
      min: 0.01,
      required: [true, 'Price is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

export const Product = model('Product', productSchema);
