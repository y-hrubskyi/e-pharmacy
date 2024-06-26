import styled from "styled-components";

import { BaseInput } from "#components/common/TextField/TextField.styled";

const getBorderColorByValidationResult = (p) => {
  if (p["data-is-correct"]) {
    return p.theme.colors.green();
  }

  if (p["data-has-error"]) {
    return p.theme.colors.red();
  }

  return p.theme.colors.border;
};

export const FilterForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.spacing(2)};

  @media screen and (min-width: 768px) {
    gap: ${(p) => p.theme.spacing(3.5)};
  }
`;

export const NameInput = styled(BaseInput)`
  width: 215px;
  border: 1px solid ${getBorderColorByValidationResult};
  box-shadow: 0 -1px 5px 0 rgba(71, 71, 71, 0.05);

  @media screen and (min-width: 768px) {
    width: 224px;
  }
`;

export const FilterActionBtn = styled.button`
  align-self: start;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(p) => p.theme.spacing(2)};
  width: 112px;
  padding: ${(p) => p.theme.spacing(3.25)} ${(p) => p.theme.spacing(4.25)};

  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.primaryBg};

  background-color: ${(p) => p.theme.colors.green()};
  border-radius: ${(p) => p.theme.radii.btn};
  border: none;

  transition: ${(p) => p.theme.transition("background-color")};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.hover};
  }

  @media screen and (min-width: 768px) {
    width: 116px;

    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const FilterIcon = styled.svg`
  width: 14px;
  height: 14px;

  stroke: currentColor;
  fill: none;
`;
