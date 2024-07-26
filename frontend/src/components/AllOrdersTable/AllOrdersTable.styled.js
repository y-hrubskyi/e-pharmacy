import styled from "styled-components";

import { THeadCell, TDataCell } from "@/components/common/Table/Table.styled";
import { OrderStatuses } from "@/config/constants";

const getTextColorByOrderStatus = (p) => {
  const orderStatus = p["data-order-status"];

  switch (orderStatus) {
    case OrderStatuses.PENDING:
      return p.theme.colors.order.pending();
    case OrderStatuses.PROCESSING:
      return p.theme.colors.order.processing();
    case OrderStatuses.CONFIRMED:
      return p.theme.colors.order.confirmed();
    case OrderStatuses.SHIPPED:
      return p.theme.colors.order.shipped();
    case OrderStatuses.DELIVERED:
      return p.theme.colors.order.delivered();
    case OrderStatuses.COMPLETED:
      return p.theme.colors.order.completed();
    case OrderStatuses.CANCELLED:
      return p.theme.colors.order.cancelled();
    default:
      return p.theme.colors.primaryText;
  }
};

const getBgColorByOrderStatus = (p) => {
  const transactionType = p["data-order-status"];

  switch (transactionType) {
    case OrderStatuses.PENDING:
      return p.theme.colors.order.pending(0.1);
    case OrderStatuses.PROCESSING:
      return p.theme.colors.order.processing(0.1);
    case OrderStatuses.CONFIRMED:
      return p.theme.colors.order.confirmed(0.1);
    case OrderStatuses.SHIPPED:
      return p.theme.colors.order.shipped(0.1);
    case OrderStatuses.DELIVERED:
      return p.theme.colors.order.delivered(0.1);
    case OrderStatuses.COMPLETED:
      return p.theme.colors.order.completed(0.1);
    case OrderStatuses.CANCELLED:
      return p.theme.colors.order.cancelled(0.1);
    default:
      return p.theme.colors.border;
  }
};

export const NameColumn = styled(THeadCell)`
  min-width: 114px;

  @media screen and (min-width: 768px) {
    min-width: 205px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 265px;
  }
`;

export const AddressColumn = styled(THeadCell)`
  min-width: 110px;

  @media screen and (min-width: 768px) {
    min-width: 158px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 218px;
  }
`;

export const ProductsColumn = styled(THeadCell)`
  min-width: 96px;

  @media screen and (min-width: 768px) {
    min-width: 131px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 191px;
  }
`;

export const OrderDateColumn = styled(THeadCell)`
  min-width: 121px;

  @media screen and (min-width: 768px) {
    min-width: 172px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 232px;
  }
`;

export const PriceColumn = styled(THeadCell)`
  min-width: 85px;

  @media screen and (min-width: 768px) {
    min-width: 125px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 184px;
  }
`;

export const StatusColumn = styled(THeadCell)`
  min-width: 117px;

  @media screen and (min-width: 768px) {
    min-width: 129px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 150px;
  }
`;

export const NameDataCell = styled(TDataCell)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.spacing(2)};

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const AddressDataCell = styled(TDataCell)`
  white-space: nowrap;
`;

export const OrderStatusText = styled.p`
  width: fit-content;
  padding: ${(p) => p.theme.spacing(1)} ${(p) => p.theme.spacing(3)};

  letter-spacing: -0.05em;
  text-align: center;
  color: ${getTextColorByOrderStatus};

  background-color: ${getBgColorByOrderStatus};
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
