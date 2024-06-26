import styled from "styled-components";

import { THeadCell, TDataCell } from "#components/common/Table/Table.styled";

export const NameColumn = styled(THeadCell)`
  min-width: 112px;

  @media screen and (min-width: 768px) {
    min-width: 240px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 276px;
  }
`;

export const CategoryColumn = styled(THeadCell)`
  min-width: 78px;

  @media screen and (min-width: 768px) {
    min-width: 150px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 230px;
  }
`;

export const StockColumn = styled(THeadCell)`
  min-width: 57px;

  @media screen and (min-width: 768px) {
    min-width: 119px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 199px;
  }
`;

export const SupplierColumn = styled(THeadCell)`
  min-width: 78px;

  @media screen and (min-width: 768px) {
    min-width: 150px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 226px;
  }
`;

export const PriceColumn = styled(THeadCell)`
  min-width: 69px;

  @media screen and (min-width: 768px) {
    min-width: 140px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 163px;
  }
`;

export const ActionColumn = styled(THeadCell)`
  min-width: 89px;

  @media screen and (min-width: 768px) {
    min-width: 121px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 146px;
  }
`;

export const ActionDataCell = styled(TDataCell)`
  display: flex;
  gap: ${(p) => p.theme.spacing(2)};
`;

export const ActionBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;

  background-color: transparent;
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const EditBtn = styled(ActionBtn)`
  color: ${(p) => p.theme.colors.green()};

  border: 1px solid ${(p) => p.theme.colors.green(0.5)};
`;

export const RemoveBtn = styled(ActionBtn)`
  color: ${(p) => p.theme.colors.red()};

  border: 1px solid ${(p) => p.theme.colors.red(0.5)};
`;

export const ActionIcon = styled.svg`
  flex-shrink: 0;
  width: 16px;
  height: 16px;

  fill: none;
  stroke: currentColor;
`;
