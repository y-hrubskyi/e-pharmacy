import { Icons } from "@/config/icons";

import {
  CorrectMessage,
  ErrorMessage,
} from "@/components/common/TextField/TextField.styled";
import * as SC from "./PasswordField.styled";

export const PasswordField = ({
  isCorrect,
  correctMessage,
  hasError,
  errorMessage,
  passwordShown,
  onTogglePasswordShown,
  children,
}) => {
  return (
    <SC.FieldWrapper>
      {children}
      <SC.EyeBtn
        type="button"
        onClick={onTogglePasswordShown}
        aria-label={`${passwordShown ? "hide" : "show"} password`}
        data-was-valid={isCorrect || hasError}
      >
        <SC.EyeIcon>
          <use href={passwordShown ? Icons.eyeOn : Icons.eyeOff}></use>
        </SC.EyeIcon>
      </SC.EyeBtn>
      {isCorrect && <CorrectMessage>{correctMessage}</CorrectMessage>}
      {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </SC.FieldWrapper>
  );
};
