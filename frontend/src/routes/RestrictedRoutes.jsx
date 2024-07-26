import { Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "@/pages/LoginPage/LoginPage";

const RestrictedRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default RestrictedRoutes;
