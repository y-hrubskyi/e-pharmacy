import { Schema, model } from 'mongoose';

import { Regexps } from '#validators/userValidator.js';

const userSchema = new Schema(
  {
    name: {
      type: String,
      match: Regexps.NAME,
      required: true,
    },
    email: {
      type: String,
      match: Regexps.EMAIL,
      unique: true,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      minlength: 8, // here will be hashed password, because we use pattern only for joi
      required: [true, 'Set password for user'],
    },
    accessToken: {
      type: String,
      default: '',
    },
    refreshToken: {
      type: String,
      default: '',
    },
  },
  { versionKey: false, timestamps: true }
);

export const User = model('User', userSchema);
