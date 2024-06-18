import styled from "styled-components";

export const BaseInput = styled.input`
  padding: ${(p) => p.theme.spacing(3)} ${(p) => p.theme.spacing(4.25)};

  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.primaryText};

  background-color: ${(p) => p.theme.colors.primaryBg};
  outline: transparent;
  border-radius: ${(p) => p.theme.radii.field};
  border: 1px solid ${(p) => p.theme.colors.border};

  transition: ${(p) => p.theme.transition("border-color")};

  &::placeholder {
    color: ${(p) => p.theme.colors.secondaryText};
  }
`;

export const BaseValidationMessage = styled.p`
  margin-top: ${(p) => p.theme.spacing(1)};
  margin-left: ${(p) => p.theme.spacing(4.25)};

  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    margin-top: ${(p) => p.theme.spacing(2)};
  }
`;

export const CorrectMessage = styled(BaseValidationMessage)`
  color: ${(p) => p.theme.colors.green()};
`;

export const ErrorMessage = styled(BaseValidationMessage)`
  color: ${(p) => p.theme.colors.red()};
`;
