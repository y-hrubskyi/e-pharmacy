import styled from "styled-components";

import { BaseInput } from "#components/common/TextField/TextField.styled";

const getBorderColorByValidationResult = (p) => {
  if (p["data-is-correct"]) {
    return p.theme.colors.green();
  }

  if (p["data-has-error"]) {
    return p.theme.colors.red();
  }

  return p.theme.colors.border;
};

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    gap: ${(p) => p.theme.spacing(10)};
  }
`;

export const FormTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.16667;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(10)};
`;

export const FormFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(3.5)};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: ${(p) => p.theme.spacing(3.5)};
    column-gap: ${(p) => p.theme.spacing(2)};
  }
`;

export const FormInput = styled(BaseInput)`
  width: 100%;
  border: 1px solid ${getBorderColorByValidationResult};

  @media screen and (min-width: 768px) {
    width: 224px;
  }
`;

export const FormActionBtnsWrapper = styled.div`
  display: flex;
  gap: ${(p) => p.theme.spacing(2)};
`;

export const FormActionBtn = styled.button`
  width: 146px;
  padding: ${(p) => p.theme.spacing(3)} ${(p) => p.theme.spacing(4)};

  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;

  border-radius: ${(p) => p.theme.radii.btn};

  @media screen and (min-width: 768px) {
    width: 133px;

    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const FormSubmitBtn = styled(FormActionBtn)`
  color: ${(p) => p.theme.colors.primaryBg};

  background-color: ${(p) => p.theme.colors.green()};
  border: 1px solid ${(p) => p.theme.colors.green()};

  transition: ${(p) => p.theme.transition("background-color")},
    ${(p) => p.theme.transition("border-color")};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.hover};
    border-color: ${(p) => p.theme.colors.hover};
  }
`;

export const FormCancelBtn = styled(FormActionBtn)`
  color: ${(p) => p.theme.colors.secondaryText};

  background-color: ${(p) => p.theme.colors.border};
  border: 1px solid ${(p) => p.theme.colors.border};

  transition: ${(p) => p.theme.transition("color")},
    ${(p) => p.theme.transition("background-color")},
    ${(p) => p.theme.transition("border-color")};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.hover};

    background-color: transparent;
    border-color: ${(p) => p.theme.colors.hover};
  }
`;
