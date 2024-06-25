import Select from "react-select";
import { useTheme } from "styled-components";

import { selectStyles } from "./SelectBase.styled";

const getBorderColorByValidationResult = (theme, isCorrect, hasError) => {
  if (isCorrect) return theme.colors.green();

  if (hasError) return theme.colors.red();

  return theme.colors.border;
};

export const SelectBase = ({
  placeholder,
  options,
  defaultValue,
  menuHeight,
  onChange,
  isCorrect,
  hasError,
}) => {
  const theme = useTheme();

  return (
    <Select
      placeholder={placeholder}
      styles={{
        ...selectStyles,
        control: (baseStyles, state) => ({
          ...selectStyles.control(baseStyles, state),
          border: `1px solid ${getBorderColorByValidationResult(
            theme,
            isCorrect,
            hasError
          )}`,
        }),
        menu: (baseStyles, state) => ({
          ...selectStyles.menu(baseStyles, state),
          height: menuHeight,
        }),
      }}
      options={options}
      defaultValue={defaultValue}
      onChange={(selected) => onChange(selected?.value || "")}
      isCorrect={isCorrect}
      hasError={hasError}
    />
  );
};
