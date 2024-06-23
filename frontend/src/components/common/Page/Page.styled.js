import styled from "styled-components";

export const PageWrapper = styled.div`
  padding-top: ${(p) => p.theme.spacing(10)};
  padding-bottom: ${(p) => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    padding-top: ${(p) => p.theme.spacing(12.5)};
  }

  @media screen and (min-width: 1440px) {
    padding-top: ${(p) => p.theme.spacing(18.75)};
  }
`;

export const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(4)};
  margin-bottom: ${(p) => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;
