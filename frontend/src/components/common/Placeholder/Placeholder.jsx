import * as SC from "./Placeholder.styled";

export const Placeholder = ({ children }) => {
  return (
    <SC.PlaceholderWrapper>
      <SC.ContentWrapper>
        <SC.PlaceholderImg />
        <SC.PlaceholderText>{children}</SC.PlaceholderText>
      </SC.ContentWrapper>
    </SC.PlaceholderWrapper>
  );
};
