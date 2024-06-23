import {
  Table,
  Caption,
  TRow,
  TDataCell,
  Avatar,
} from "#components/common/Table/Table.styled";

import * as SC from "./CustomersDataTable.styled";

export const CustomersDataTable = ({ customers }) => {
  return (
    <Table>
      <Caption>Customers Data</Caption>
      <thead>
        <TRow>
          <SC.NameColumn>User info</SC.NameColumn>
          <SC.EmailColumn>Email</SC.EmailColumn>
          <SC.AddressColumn>Address</SC.AddressColumn>
          <SC.PhoneColumn>Phone</SC.PhoneColumn>
          <SC.RegisterDateColumn>Register date</SC.RegisterDateColumn>
        </TRow>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <TRow key={customer._id}>
            <SC.NameDataCell>
              <Avatar src={customer.image} alt={`${customer.image} avatar`} />
              {customer.name}
            </SC.NameDataCell>
            <TDataCell>{customer.email}</TDataCell>
            <SC.AddressDataCell>{customer.address}</SC.AddressDataCell>
            <TDataCell>{customer.phone}</TDataCell>
            <TDataCell>{customer.registerDate}</TDataCell>
          </TRow>
        ))}
      </tbody>
    </Table>
  );
};
