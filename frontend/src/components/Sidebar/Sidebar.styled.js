import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  display: ${(p) => (p["data-is-sidebar-open"] ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${(p) => p.theme.spacing(2)};
  width: 78px;
  height: 100%;
  padding-top: ${(p) => p.theme.spacing(23)};
  padding-bottom: ${(p) => p.theme.spacing(5)};

  background-color: ${(p) => p.theme.colors.pageBg};
  border-right: 1px solid ${(p) => p.theme.colors.border};

  @media screen and (min-width: 768px) {
    width: 84px;
    padding-top: ${(p) => p.theme.spacing(25)};
  }

  @media screen and (min-width: 1440px) {
    position: static;

    display: flex;
    width: 80px;
    padding-top: ${(p) => p.theme.spacing(10)};
  }

  @media screen and (max-height: 444px) and (min-width: 768px) and (max-width: 1439px) {
    padding-top: ${(p) => p.theme.spacing(16)};
  }

  @media screen and (max-height: 404px) and (max-width: 767px) {
    padding-top: ${(p) => p.theme.spacing(14)};
  }
`;

export const SidebarCloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 14px;

  padding: 0;
  width: 32px;
  height: 32px;

  color: ${(p) => p.theme.colors.primaryText};

  border: none;
  background-color: transparent;

  transition: ${(p) => p.theme.transition("color")};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.green()};
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const CrossIcon = styled.svg`
  width: 100%;
  height: 100%;

  stroke: currentColor;
`;

export const LogOutBtnWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${(p) => p.theme.colors.backdrop};
`;
