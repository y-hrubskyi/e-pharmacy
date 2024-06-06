export const Regexps = {
  NAME: /^[a-zA-Z0-9_\- ]{3,30}$/,
  ADDRESS: /^[a-zA-Z0-9\s,'-]+$/,
  COMPANY: /^[a-zA-Z0-9_\- ]{3,30}$/,
};

const Statuses = {
  ACTIVE: 'Active',
  DEACTIVE: 'Deactive',
};

export const Enums = {
  STATUSES: Object.values(Statuses),
};
