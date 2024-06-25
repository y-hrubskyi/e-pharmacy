import { Icons } from "#config/icons";

import * as SC from "./SidebarMenu.styled";

export const SidebarMenu = ({ onCloseSidebar }) => {
  return (
    <SC.SidebarMenu>
      <SC.NavList>
        <SC.NavItem>
          <SC.NavLink to="/dashboard" onClick={onCloseSidebar}>
            <SC.NavItemIcon>
              <use href={Icons.dashboard}></use>
            </SC.NavItemIcon>
          </SC.NavLink>
        </SC.NavItem>
        <SC.NavItem>
          <SC.NavLink to="/orders" onClick={onCloseSidebar}>
            <SC.NavItemIcon>
              <use href={Icons.orders}></use>
            </SC.NavItemIcon>
          </SC.NavLink>
        </SC.NavItem>
        <SC.NavItem>
          <SC.NavLink to="/products" onClick={onCloseSidebar}>
            <SC.NavItemIcon>
              <use href={Icons.products}></use>
            </SC.NavItemIcon>
          </SC.NavLink>
        </SC.NavItem>
        <SC.NavItem>
          <SC.NavLink to="/suppliers" onClick={onCloseSidebar}>
            <SC.NavItemIcon>
              <use href={Icons.suppliers}></use>
            </SC.NavItemIcon>
          </SC.NavLink>
        </SC.NavItem>
        <SC.NavItem>
          <SC.NavLink to="/customers" onClick={onCloseSidebar}>
            <SC.NavItemIcon>
              <use href={Icons.customers}></use>
            </SC.NavItemIcon>
          </SC.NavLink>
        </SC.NavItem>
      </SC.NavList>
    </SC.SidebarMenu>
  );
};
