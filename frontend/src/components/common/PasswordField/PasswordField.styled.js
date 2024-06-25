import styled from "styled-components";

export const FieldWrapper = styled.div`
  position: relative;
`;

export const EyeBtn = styled.button`
  position: absolute;
  top: 13px;
  right: 18px;

  width: 18px;
  height: 18px;
  padding: 0;

  color: ${(p) => p.theme.colors.primaryText};

  background-color: transparent;
  border: none;
`;

export const EyeIcon = styled.svg`
  width: 100%;
  height: 100%;

  stroke: currentColor;
  fill: none;
`;
