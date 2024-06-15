import { Product, Supplier, Customer, Transaction } from '#models/index.js';

const SortOptions = {
  CUSTOMERS: { updatedAt: -1 },
  TRANSACTIONS: { createdAt: -1 },
};
const Limits = {
  CUSTOMERS: 5,
  TRANSACTIONS: 6,
};

export const get = async () => {
  const dbReqPromises = [
    Product.countDocuments({}),
    Supplier.countDocuments({}),
    Customer.countDocuments({}),
    Customer.find().sort(SortOptions.CUSTOMERS).limit(Limits.CUSTOMERS),
    Transaction.find()
      .sort(SortOptions.TRANSACTIONS)
      .limit(Limits.TRANSACTIONS),
  ];

  const [
    productsQuantity,
    suppliersQuantity,
    customersQuantity,
    recentCustomers,
    recentTransactions,
  ] = await Promise.all(dbReqPromises);

  return {
    productsQuantity,
    suppliersQuantity,
    customersQuantity,
    recentCustomers,
    recentTransactions,
  };
};
