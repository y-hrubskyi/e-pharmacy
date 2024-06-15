export const Regexps = {
  NAME: /^[a-zA-Z0-9_\- ]{3,30}$/,
  ADDRESS: /^[a-zA-Z0-9\s,'-]+$/,
};

const Statuses = {
  PENDING: 'Pending',
  PROCESSING: 'Processing',
  CONFIRMED: 'Confirmed',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled',
};

export const Enums = {
  STATUSES: Object.values(Statuses),
};
