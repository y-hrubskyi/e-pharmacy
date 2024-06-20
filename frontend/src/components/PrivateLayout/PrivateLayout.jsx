import { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "#components/Header/Header";
import { Sidebar } from "#components/Sidebar/Sidebar";

import * as SC from "./PrivateLayout.styled";

export const PrivateLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <SC.Container>
      <Header onOpenSidebar={openSidebar} />

      <SC.Wrapper>
        <Sidebar isSidebarOpen={isSidebarOpen} onCloseSidebar={closeSidebar} />

        <SC.Main>
          <Suspense>
            <Outlet />
          </Suspense>
        </SC.Main>
      </SC.Wrapper>
    </SC.Container>
  );
};
