import styled from "styled-components";

export const StatisticList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.spacing(5)};
  margin-bottom: ${(p) => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    margin-bottom: ${(p) => p.theme.spacing(10)};
  }
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(8)};
  width: 156px;
  padding: ${(p) => p.theme.spacing(3.25)};

  background-color: ${(p) => p.theme.colors.primaryBg};
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    gap: ${(p) => p.theme.spacing(7)};
    width: 220px;
    padding-right: ${(p) => p.theme.spacing(4.25)};
    padding-left: ${(p) => p.theme.spacing(4.25)};
  }

  @media screen and (min-width: 1440px) {
    width: 240px;
  }
`;

export const StatisticTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing(2)};
`;

export const StatisticIcon = styled.svg`
  width: 18px;
  height: 18px;

  fill: none;
  stroke: currentColor;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const StatisticTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16667;
  color: ${(p) => p.theme.colors.secondaryText};

  @media screen and (min-width: 768px) {
    line-height: 1.5;
  }
`;

export const StatisticValue = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33333;
  }
`;
