import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

export const StyledDatePickerContainer = styled.div`
  .react-datepicker-wrapper {
    width: 100%;

    .react-datepicker__input-container {
      input {
        padding: ${(p) => p.theme.spacing(3)} ${(p) => p.theme.spacing(4.25)};

        cursor: pointer;
      }

      .react-datepicker__calendar-icon {
        top: 14px;
        right: 18px;

        padding: 0;
      }
    }
  }
`;

export const CalendarIcon = styled.svg`
  width: 16px;
  height: 16px;

  cursor: pointer;

  fill: none;
  stroke: ${(p) => p.theme.colors.green()};
`;
