import styled from "styled-components";

import { BaseInput } from "@/components/common/TextField/TextField.styled";

export const AuthForm = styled.form`
  align-self: start;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 323px;
  }
`;

export const AuthFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(3.5)};
  margin-bottom: ${(p) => p.theme.spacing(10)};
`;

export const AuthInput = styled(BaseInput)`
  width: 100%;
  border: 1px solid
    ${(p) => {
      if (p["data-is-correct"]) {
        return p.theme.colors.green();
      }

      if (p["data-has-error"]) {
        return p.theme.colors.red();
      }

      return p.theme.colors.border;
    }};
`;

export const PasswordInput = styled(AuthInput)`
  padding-right: ${(p) => p.theme.spacing(11)};
`;

export const AuthSubmitBtn = styled.button`
  width: 100%;
  padding: ${(p) => p.theme.spacing(3.25)} ${(p) => p.theme.spacing(4.25)};

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${(p) => p.theme.colors.primaryBg};

  background-color: ${(p) => p.theme.colors.green()};
  border-radius: ${(p) => p.theme.radii.btn};
  border: none;

  transition: ${(p) => p.theme.transition("background-color")};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.hover};
  }
`;
