import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const PrivateLayout = () => {
  return (
    <div>
      PrivateLayout
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
