import {
  Table,
  Caption,
  TRow,
  TDataCell,
  Avatar,
} from "@/components/common/Table/Table.styled";

import * as SC from "./RecentCustomersTable.styled";

export const RecentCustomersTable = ({ customers }) => {
  return (
    <Table>
      <Caption>Recent Customers</Caption>
      <thead>
        <TRow>
          <SC.NameColumn>Name</SC.NameColumn>
          <SC.EmailColumn>Email</SC.EmailColumn>
          <SC.SpentColumn>Spent</SC.SpentColumn>
        </TRow>
      </thead>
      <SC.TBody>
        {customers.map((customer) => (
          <TRow key={customer._id}>
            <SC.NameDataCell>
              <Avatar src={customer.image} alt={`${customer.name} avatar`} />
              {customer.name}
            </SC.NameDataCell>
            <TDataCell>{customer.email}</TDataCell>
            <TDataCell>{customer.spent.toLocaleString("en-US")}</TDataCell>
          </TRow>
        ))}
      </SC.TBody>
    </Table>
  );
};
