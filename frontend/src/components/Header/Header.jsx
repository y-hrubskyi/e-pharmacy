import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Icons } from "#config/icons";
import { selectAuthUser } from "#store/auth/selectors";

import { LogOutBtn } from "#components/common/LogOutBtn/LogOutBtn";
import * as SC from "./Header.styled";

const Pages = {
  dashboard: "Dashboard",
  orders: "All orders",
  products: "All products",
  suppliers: "All suppliers",
  customers: "All customers",
};

export const Header = ({ onOpenSidebar }) => {
  const location = useLocation();
  const user = useSelector(selectAuthUser);

  const page = location.pathname.slice(1);

  return (
    <SC.Header>
      <SC.MobileMenuBtn
        type="button"
        onClick={onOpenSidebar}
        aria-label="open sidebar"
      >
        <SC.MobileMenuIcon>
          <use href={Icons.mobileMenu}></use>
        </SC.MobileMenuIcon>
      </SC.MobileMenuBtn>
      <SC.Logo to="/" aria-label="e-pharmacy logo" />
      <div>
        <SC.Title>Medicine store</SC.Title>
        <SC.SubTitle>
          {Pages[page]} | {user.email}
        </SC.SubTitle>
      </div>
      <SC.LogOutBtnWrapper>
        <LogOutBtn />
      </SC.LogOutBtnWrapper>
    </SC.Header>
  );
};
