import styled from "styled-components";

export const TableWrapper = styled.div`
  overflow: auto;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${(p) => p.theme.colors.scrollbarTrack};
    border-radius: ${(p) => p.theme.radii.scrollbar};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${(p) => p.theme.radii.scrollbar};
    background: ${(p) => p.theme.colors.scrollbarThumb};
  }
`;

export const Table = styled.table`
  padding-right: ${(p) => p.theme.spacing(3.25)};
  padding-left: ${(p) => p.theme.spacing(3.25)};

  background-color: ${(p) => p.theme.colors.primaryBg};
  border: 1px solid ${(p) => p.theme.colors.border};
  border-top: 0;
  border-radius: 0 0 ${(p) => p.theme.radii.table} ${(p) => p.theme.radii.table};
  border-spacing: 0;

  @media screen and (min-width: 768px) {
    padding-right: ${(p) => p.theme.spacing(4.75)};
    padding-left: ${(p) => p.theme.spacing(4.75)};
  }
`;

export const Caption = styled.caption`
  padding: ${(p) => p.theme.spacing(3.5)};

  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  text-align: left;

  background-color: #e7f1ed;
  border-radius: ${(p) => p.theme.radii.table} ${(p) => p.theme.radii.table} 0 0;

  @media screen and (min-width: 768px) {
    padding: ${(p) => p.theme.spacing(5)};

    font-size: 18px;
    line-height: 1.33333;
  }
`;

export const TRow = styled.tr`
  &:first-child th {
    border-top: 0;
  }

  &:last-child td {
    border-bottom: 0;
  }

  th,
  td {
    border-top: 0;
    border-right: 0;

    &:first-child {
      padding-left: 0;
      border-left: 0;
    }

    &:last-child {
      padding-right: 0;
      border-right: 0;
    }
  }
`;

export const THeadCell = styled.th`
  padding: ${(p) => p.theme.spacing(3.5)} ${(p) => p.theme.spacing(2.5)};

  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  text-align: left;
  color: ${(p) => p.theme.colors.secondaryText};

  border: 1px solid ${(p) => p.theme.colors.border};

  @media screen and (min-width: 768px) {
    padding: ${(p) => p.theme.spacing(5)};

    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const TDataCell = styled.td`
  padding: ${(p) => p.theme.spacing(3.5)} ${(p) => p.theme.spacing(2.5)};

  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  text-align: left;

  border: 1px solid ${(p) => p.theme.colors.border};

  @media screen and (min-width: 768px) {
    padding: ${(p) => p.theme.spacing(5)};

    font-size: 16px;
    line-height: 1.125;
  }
`;

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: ${(p) => p.theme.radii.img};

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;
