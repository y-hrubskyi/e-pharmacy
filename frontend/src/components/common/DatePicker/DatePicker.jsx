import ReactDatePicker from "react-datepicker";

import { Icons } from "#config/icons";

import { FormInput } from "#components/common/ModalForm/ModalForm.styled";
import * as SC from "./DatePicker.styled";

export const DatePicker = ({
  placeholder,
  onChange,
  selected,
  isCorrect,
  hasError,
}) => {
  return (
    <SC.StyledDatePickerContainer>
      <ReactDatePicker
        dateFormat="MMMM d, yyyy"
        placeholderText={placeholder}
        onChange={onChange}
        selected={selected}
        showIcon
        icon={
          <SC.CalendarIcon>
            <use href={Icons.calendar}></use>
          </SC.CalendarIcon>
        }
        customInput={
          <FormInput data-is-correct={isCorrect} data-has-error={hasError} />
        }
        toggleCalendarOnIconClick
      />
    </SC.StyledDatePickerContainer>
  );
};
