const TransactionTypes = {
  INCOME: 'Income',
  EXPENSE: 'Expense',
  ERROR: 'Error',
};

const ParticipantRoles = {
  CUSTOMER: 'Customer',
  SUPPLIER: 'Supplier',
};

export const Enums = {
  TRANSACTION_TYPES: Object.values(TransactionTypes),
  PARTICIPANT_ROLES: Object.values(ParticipantRoles),
};
