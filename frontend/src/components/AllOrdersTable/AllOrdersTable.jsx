import {
  Table,
  Caption,
  TRow,
  TDataCell,
  Avatar,
} from "#components/common/Table/Table.styled";

import * as SC from "./AllOrdersTable.styled";

export const AllOrdersTable = ({ orders }) => {
  return (
    <Table>
      <Caption>All Orders</Caption>
      <thead>
        <TRow>
          <SC.NameColumn>User info</SC.NameColumn>
          <SC.AddressColumn>Address</SC.AddressColumn>
          <SC.ProductsColumn>Products</SC.ProductsColumn>
          <SC.OrderDateColumn>Order date</SC.OrderDateColumn>
          <SC.PriceColumn>Price</SC.PriceColumn>
          <SC.StatusColumn>Status</SC.StatusColumn>
        </TRow>
      </thead>
      <tbody>
        {orders.map((order) => (
          <TRow key={order._id}>
            <SC.NameDataCell>
              <Avatar
                src={order.customer.photo}
                alt={`${order.customer.name} avatar`}
              />
              {order.customer.name}
            </SC.NameDataCell>
            <SC.AddressDataCell>{order.customer.address}</SC.AddressDataCell>
            <TDataCell>{order.products}</TDataCell>
            <TDataCell>{order.orderDate}</TDataCell>
            <TDataCell>{order.price.toLocaleString("en-US")}</TDataCell>
            <TDataCell>
              <SC.OrderStatusText data-order-status={order.status}>
                {order.status}
              </SC.OrderStatusText>
            </TDataCell>
          </TRow>
        ))}
      </tbody>
    </Table>
  );
};
