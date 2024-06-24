import styled from "styled-components";

import { TableWrapper as BaseTableWrapper } from "#components/common/Table/Table.styled";

export const PageWrapper = styled.div`
  height: 100%;

  padding-top: ${(p) => p.theme.spacing(5)};
  padding-bottom: ${(p) => p.theme.spacing(20)};

  @media screen and (min-width: 768px) {
    padding-bottom: ${(p) => p.theme.spacing(10)};
  }
`;

export const TablesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(10)};

  @media screen and (min-width: 768px) {
    gap: ${(p) => p.theme.spacing(5)};
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const TableWrapper = styled(BaseTableWrapper)`
  flex-shrink: 0;

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 20px) / 2);
  }
`;

export const PlaceholderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
