import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  outline: 1px solid red;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Main = styled.main`
  padding-right: ${(p) => p.theme.spacing(5)};
  padding-left: ${(p) => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    padding-right: ${(p) => p.theme.spacing(8)};
    padding-left: ${(p) => p.theme.spacing(8)};
  }

  @media screen and (min-width: 1440px) {
    padding-right: ${(p) => p.theme.spacing(10)};
    padding-left: ${(p) => p.theme.spacing(10)};
  }
`;
