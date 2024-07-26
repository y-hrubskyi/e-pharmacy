import styled from "styled-components";

import { THeadCell, TDataCell } from "@/components/common/Table/Table.styled";

export const TBody = styled.tbody`
  tr {
    &:last-child td {
      @media screen and (min-width: 1440px) {
        padding-bottom: ${(p) => p.theme.spacing(5.875)};
      }
    }
  }
`;

export const NameColumn = styled(THeadCell)`
  min-width: 92px;

  @media screen and (min-width: 768px) {
    min-width: 235px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 203px;
  }
`;

export const EmailColumn = styled(THeadCell)`
  min-width: 151px;

  @media screen and (min-width: 768px) {
    min-width: 279px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 269px;
  }
`;

export const SpentColumn = styled(THeadCell)`
  min-width: 64px;

  @media screen and (min-width: 768px) {
    min-width: 150px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 118px;
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
