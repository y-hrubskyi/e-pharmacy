import styled from "styled-components";

import { THeadCell, TDataCell } from "@/components/common/Table/Table.styled";

export const NameColumn = styled(THeadCell)`
  min-width: 94px;

  @media screen and (min-width: 768px) {
    min-width: 195px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 260px;
  }
`;

export const EmailColumn = styled(THeadCell)`
  min-width: 161px;

  @media screen and (min-width: 768px) {
    min-width: 234px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 299px;
  }
`;

export const AddressColumn = styled(THeadCell)`
  min-width: 120px;

  @media screen and (min-width: 768px) {
    min-width: 148px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 213px;
  }
`;

export const PhoneColumn = styled(THeadCell)`
  min-width: 148px;

  @media screen and (min-width: 768px) {
    min-width: 198px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 263px;
  }
`;

export const RegisterDateColumn = styled(THeadCell)`
  min-width: 119px;

  @media screen and (min-width: 768px) {
    min-width: 145px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 205px;
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
