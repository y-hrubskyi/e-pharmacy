import { Icons } from "#config/icons";

import * as SC from "./SidebarMenu.styled";

export const SidebarMenu = () => {
  return (
    <SC.SidebarMenu>
      <SC.NavList>
        <SC.NavItem>
          <SC.NavLink to="/dashboard">
            <SC.NavItemIcon>
              <use href={Icons.dashboard}></use>
            </SC.NavItemIcon>
          </SC.NavLink>
        </SC.NavItem>
        <SC.NavItem>
          <SC.NavLink to="/orders">
            <SC.NavItemIcon>
              <use href={Icons.orders}></use>
            </SC.NavItemIcon>
          </SC.NavLink>
        </SC.NavItem>
        <SC.NavItem>
          <SC.NavLink to="/products">
            <SC.NavItemIcon>
              <use href={Icons.products}></use>
            </SC.NavItemIcon>
          </SC.NavLink>
        </SC.NavItem>
        <SC.NavItem>
          <SC.NavLink to="/suppliers">
            <SC.NavItemIcon>
              <use href={Icons.suppliers}></use>
            </SC.NavItemIcon>
          </SC.NavLink>
        </SC.NavItem>
        <SC.NavItem>
          <SC.NavLink to="/customers">
            <SC.NavItemIcon>
              <use href={Icons.customers}></use>
            </SC.NavItemIcon>
          </SC.NavLink>
        </SC.NavItem>
      </SC.NavList>
    </SC.SidebarMenu>
  );
};
