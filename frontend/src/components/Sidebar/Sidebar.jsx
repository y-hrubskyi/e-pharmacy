import { useEffect } from "react";

import { Icons } from "#config/icons";

import { SidebarMenu } from "#components/SidebarMenu/SidebarMenu";
import { LogOutBtn } from "#components/common/LogOutBtn/LogOutBtn";

import * as SC from "./Sidebar.styled";

export const Sidebar = ({ isSidebarOpen, onCloseSidebar }) => {
  useEffect(() => {
    const handleWindowResize = () => {
      if (innerWidth >= 1440) onCloseSidebar();
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [onCloseSidebar]);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCloseSidebar();
    }
  };

  return (
    <>
      <SC.SidebarWrapper data-is-sidebar-open={isSidebarOpen}>
        <SC.SidebarCloseBtn
          type="button"
          onClick={onCloseSidebar}
          aria-label="close sidebar"
        >
          <SC.CrossIcon>
            <use href={Icons.cross}></use>
          </SC.CrossIcon>
        </SC.SidebarCloseBtn>

        <SidebarMenu onCloseSidebar={onCloseSidebar} />

        <SC.LogOutBtnWrapper>
          <LogOutBtn />
        </SC.LogOutBtnWrapper>
      </SC.SidebarWrapper>

      {isSidebarOpen && <SC.Backdrop onClick={handleBackdropClick} />}
    </>
  );
};
