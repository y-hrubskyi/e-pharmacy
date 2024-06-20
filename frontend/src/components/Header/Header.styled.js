import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoIMG from "#assets/img/header/logo.webp";

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: ${(p) => p.theme.spacing(4)} ${(p) => p.theme.spacing(5)};

  border-bottom: 1px solid ${(p) => p.theme.colors.border};

  @media screen and (min-width: 768px) {
    padding: ${(p) => p.theme.spacing(3.75)} ${(p) => p.theme.spacing(8)};
  }

  @media screen and (min-width: 1440px) {
    padding-right: ${(p) => p.theme.spacing(10)};
    padding-left: ${(p) => p.theme.spacing(10)};
  }
`;

export const MobileMenuBtn = styled.button`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  margin-right: ${(p) => p.theme.spacing(5)};
  padding: 0;

  color: ${(p) => p.theme.colors.primaryText};

  border: none;
  background-color: transparent;

  transition: ${(p) => p.theme.transition("color")};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.green()};
  }

  @media screen and (min-width: 7680px) {
    margin-right: ${(p) => p.theme.spacing(4)};
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.svg`
  width: 100%;
  height: 100%;

  stroke: currentColor;
`;

export const Logo = styled(Link)`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  margin-right: ${(p) => p.theme.spacing(5)};

  color: currentColor;
  text-decoration: none;

  background-image: url(${LogoIMG});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: ${(p) => p.theme.spacing(8)};
  }

  @media screen and (min-width: 1440px) {
    width: 40px;
    height: 40px;
    margin-right: ${(p) => p.theme.spacing(15)};
  }
`;

export const Title = styled.p`
  margin-bottom: ${(p) => p.theme.spacing(1)};

  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.16667;
  }
`;

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.secondaryText};
`;

export const LogOutBtnWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    margin-left: auto;
    flex-shrink: 0;
  }
`;
