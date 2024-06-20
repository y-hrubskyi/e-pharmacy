import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import * as SC from "./PrivateLayout.styled";

export const PrivateLayout = () => {
  return (
    <SC.Container>
      <SC.Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </SC.Main>
    </SC.Container>
  );
};
