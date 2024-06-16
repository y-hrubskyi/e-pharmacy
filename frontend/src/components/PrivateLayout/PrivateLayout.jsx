import { Outlet } from "react-router-dom";

export const PrivateLayout = () => {
  return (
    <div>
      PrivateLayout
      <Outlet />
    </div>
  );
};
