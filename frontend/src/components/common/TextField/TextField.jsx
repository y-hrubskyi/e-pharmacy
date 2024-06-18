import * as SC from "./TextField.styled";

export const TextField = ({
  isCorrect,
  correctMessage,
  hasError,
  errorMessage,
  children,
}) => {
  return (
    <div>
      {children}
      {isCorrect && <SC.CorrectMessage>{correctMessage}</SC.CorrectMessage>}
      {hasError && <SC.ErrorMessage>{errorMessage}</SC.ErrorMessage>}
    </div>
  );
};
