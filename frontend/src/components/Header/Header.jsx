import { useSelector } from "react-redux";

import { Icons } from "#config/icons";
import { selectAuthUser } from "#store/auth/selectors";

import { LogOutBtn } from "#components/common/LogOutBtn/LogOutBtn";
import * as SC from "./Header.styled";

export const Header = () => {
  const user = useSelector(selectAuthUser);

  return (
    <SC.Header>
      <SC.MobileMenuBtn type="button">
        <SC.MobileMenuIcon>
          <use href={Icons.mobileMenu}></use>
        </SC.MobileMenuIcon>
      </SC.MobileMenuBtn>
      <SC.Logo to="/" aria-label="e-pharmacy logo" />
      <div>
        <SC.Title>Medicine store</SC.Title>
        <SC.SubTitle>Dashboard | {user.email}</SC.SubTitle>
      </div>
      <SC.LogOutBtnWrapper>
        <LogOutBtn />
      </SC.LogOutBtnWrapper>
    </SC.Header>
  );
};
