import { Schema, model } from 'mongoose';

import { Enums } from '#validators/transactionValidator.js';

const transactionSchema = new Schema(
  {
    type: {
      type: String,
      enum: Enums.TRANSACTION_TYPES,
      required: true,
    },
    participant: {
      role: {
        type: String,
        enum: Enums.PARTICIPANT_ROLES,
        required: true,
      },
      id: {
        type: Schema.Types.ObjectId,
        ref: function (doc) {
          return doc.participant.role;
        },
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    amount: {
      type: Number,
      min: 0.01,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export const Transaction = model('Transaction', transactionSchema);
