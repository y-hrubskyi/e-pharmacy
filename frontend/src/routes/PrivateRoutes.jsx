import { Navigate, Route, Routes } from "react-router-dom";

import { PrivateLayout } from "#components/PrivateLayout/PrivateLayout";
import DashboardPage from "#pages/DashboardPage/DashboardPage";
import OrdersPage from "#pages/OrdersPage/OrdersPage";
import ProductsPage from "#pages/ProductsPage/ProductsPage";
import SuppliersPage from "#pages/SuppliersPage/SuppliersPage";
import CustomersPage from "#pages/CustomersPage/CustomersPage";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateLayout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="suppliers" element={<SuppliersPage />} />
        <Route path="customers" element={<CustomersPage />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
