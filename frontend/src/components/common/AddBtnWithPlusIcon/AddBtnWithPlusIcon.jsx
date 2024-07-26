import { Icons } from "@/config/icons";

import * as SC from "./AddBtnWithPlusIcon.styled";

export const AddBtnWithPlusIcon = ({ children, onClick }) => {
  return (
    <SC.AddProductBtn type="button" onClick={onClick}>
      <SC.AddIconWrapper>
        <SC.AddIcon>
          <use href={Icons.plus}></use>
        </SC.AddIcon>
      </SC.AddIconWrapper>
      {children}
    </SC.AddProductBtn>
  );
};
