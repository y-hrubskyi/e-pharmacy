import ReactModal from "react-modal";

import { Icons } from "#config/icons";

import * as SC from "./ModalBase.styled";

ReactModal.setAppElement("#root");

export const ModalBase = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "unset")}
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => (
        <SC.Modal {...props}>{children}</SC.Modal>
      )}
      overlayElement={(props, contentElement) => (
        <SC.Backdrop {...props}>{contentElement}</SC.Backdrop>
      )}
    >
      <SC.CloseBtn
        type="button"
        onClick={onClose}
        aria-label="close modal window"
      >
        <SC.CrossIcon>
          <use href={Icons.cross}></use>
        </SC.CrossIcon>
      </SC.CloseBtn>
      {children}
    </ReactModal>
  );
};
