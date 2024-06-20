import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const SidebarMenu = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(3.5)};
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;

  background-color: ${(p) => p.theme.colors.primaryBg};
  border-radius: 100%;
  box-shadow: 0 -1px 7px 0 rgba(71, 71, 71, 0.05);

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const NavLink = styled(Link)`
  width: 14px;
  height: 14px;

  color: #dcdddf;

  transition: ${(p) => p.theme.transition("color")};

  &.active,
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.green()};
  }

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const NavItemIcon = styled.svg`
  width: 100%;
  height: 100%;

  fill: currentColor;
`;
