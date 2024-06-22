import styled from "styled-components";

export const PageWrapper = styled.div`
  padding-top: ${(p) => p.theme.spacing(5)};
  padding-bottom: ${(p) => p.theme.spacing(20)};

  @media screen and (min-width: 768px) {
    padding-bottom: ${(p) => p.theme.spacing(10)};
  }
`;
