import styled from "styled-components";

export const LogOutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  padding: 0;

  color: ${(p) => p.theme.colors.primaryBg};

  background-color: ${(p) => p.theme.colors.green()};
  border: none;
  border-radius: 100%;

  transition: ${(p) => p.theme.transition("background-color")};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.hover};
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const LogOutIcon = styled.svg`
  width: 14px;
  height: 14px;

  fill: currentColor;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
