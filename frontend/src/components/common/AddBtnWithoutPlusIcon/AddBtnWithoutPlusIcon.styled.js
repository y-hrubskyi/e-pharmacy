import styled from "styled-components";

export const AddBtnWithoutPlusIcon = styled.button`
  align-self: start;
  padding: ${(p) => p.theme.spacing(3)} ${(p) => p.theme.spacing(7.25)};

  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  color: inherit;

  background-color: transparent;
  border: 1px solid ${(p) => p.theme.colors.green(0.5)};
  border-radius: ${(p) => p.theme.radii.btn};

  transition: ${(p) => p.theme.transition("border-color")};

  &:hover,
  &:focus {
    border-color: ${(p) => p.theme.colors.hover};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;
