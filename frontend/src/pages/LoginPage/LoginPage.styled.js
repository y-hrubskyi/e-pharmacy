import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoIMG from "#assets/img/login-page/logo.webp";
import PillIMG from "#assets/img/login-page/pill.webp";
import DecorElelemtsIMG from "#assets/img/login-page/decor-elements.webp";

export const Container = styled.div`
  margin: 0 auto;
  padding-top: ${(p) => p.theme.spacing(6)};
  padding-right: ${(p) => p.theme.spacing(5)};
  padding-left: ${(p) => p.theme.spacing(5)};

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: ${(p) => p.theme.spacing(8)};
    padding-left: ${(p) => p.theme.spacing(8)};
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-top: ${(p) => p.theme.spacing(7)};
    padding-right: ${(p) => p.theme.spacing(25)};
    padding-left: ${(p) => p.theme.spacing(25)};
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing(3.5)};

  color: currentColor;
  text-decoration: none;
`;

export const LogoIcon = styled.div`
  width: 44px;
  height: 44px;

  background-image: url(${LogoIMG});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const LogoText = styled.span`
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.03em;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(10)};
  padding-top: ${(p) => p.theme.spacing(37)};
  padding-bottom: ${(p) => p.theme.spacing(58.5)};

  @media screen and (min-width: 768px) {
    gap: ${(p) => p.theme.spacing(12.5)};
    padding-top: ${(p) => p.theme.spacing(51)};
    padding-bottom: ${(p) => p.theme.spacing(69)};
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: ${(p) => p.theme.spacing(37.5)};
    padding-top: ${(p) => p.theme.spacing(56.5)};
    padding-bottom: ${(p) => p.theme.spacing(65.5)};
  }
`;

export const Heading = styled.h1`
  position: relative;

  font-weight: 600;
  font-size: 28px;
  line-height: 1.21429;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -56px;
    right: 20px;

    width: 95px;
    height: 93px;

    background-image: url(${PillIMG});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 768px) {
    max-width: 614px;

    font-size: 54px;
    line-height: 1.11111;

    &::before {
      top: -104px;
      right: 19px;

      width: 179px;
      height: 175px;
    }
  }
`;

export const AccentText = styled.span`
  color: ${(p) => p.theme.colors.green()};
`;

export const DecorElements = styled.div`
  position: fixed;
  right: -206px;
  bottom: -199px;
  z-index: -1;

  width: 464px;
  height: 345px;

  background-image: url(${DecorElelemtsIMG});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    right: -198px;
    bottom: -82px;
  }

  @media screen and (min-width: 1440px) {
    right: -185px;
    bottom: -88px;
  }
`;
