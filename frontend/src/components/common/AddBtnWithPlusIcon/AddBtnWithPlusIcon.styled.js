import styled from "styled-components";

export const AddProductBtn = styled.button`
  align-self: start;
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing(2)};

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: inherit;

  background-color: transparent;
  border: 0;

  &:hover span,
  &:focus span {
    background-color: ${(p) => p.theme.colors.hover};
  }
`;

export const AddIconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;

  background-color: ${(p) => p.theme.colors.green()};
  border-radius: ${(p) => p.theme.radii.btn};

  transition: ${(p) => p.theme.transition("background-color")};
`;

export const AddIcon = styled.svg`
  width: 18px;
  height: 18px;

  fill: ${(p) => p.theme.colors.primaryBg};
`;
