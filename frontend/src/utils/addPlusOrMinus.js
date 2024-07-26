import { TransactionTypes } from "@/config/constants";

export const addPlusOrMinus = (transactionType) => {
  switch (transactionType) {
    case TransactionTypes.INCOME:
      return "+";
    case TransactionTypes.EXPENSE:
      return "-";
    default:
      return "";
  }
};
