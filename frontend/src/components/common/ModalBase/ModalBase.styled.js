import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 100%;

  background-color: ${(p) => p.theme.colors.backdrop};
  overflow: auto;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(100% - 40px);
  max-height: 90%;
  padding: ${(p) => p.theme.spacing(10)} ${(p) => p.theme.spacing(5)};

  background-color: ${(p) => p.theme.colors.primaryBg};
  border-radius: ${(p) => p.theme.radii.modal};
  border: 0;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    margin-top: 20px;
    margin-bottom: 20px;
    background: ${(p) => p.theme.colors.scrollbarTrack};
    border-radius: ${(p) => p.theme.radii.scrollbar};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${(p) => p.theme.radii.scrollbar};
    background: ${(p) => p.theme.colors.scrollbarThumb};
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 536px;
    padding: ${(p) => p.theme.spacing(10)};
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 13px;
  right: 13px;

  width: 24px;
  height: 24px;
  padding: 0;

  color: ${(p) => p.theme.colors.primaryText};

  background-color: transparent;
  border: 0;

  transition: ${(p) => p.theme.transition("color")};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.green()};
  }

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;

export const CrossIcon = styled.svg`
  width: 100%;
  height: 100%;

  stroke: currentColor;
`;
