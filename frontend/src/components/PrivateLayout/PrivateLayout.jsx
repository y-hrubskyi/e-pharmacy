import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "#components/Header/Header";

import * as SC from "./PrivateLayout.styled";

export const PrivateLayout = () => {
  return (
    <SC.Container>
      <Header />

      <SC.Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </SC.Main>
    </SC.Container>
  );
};
