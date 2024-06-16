import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { PrivateLayout } from "#components/PrivateLayout/PrivateLayout";

const DashboardPage = lazy(() => import("#pages/DashboardPage/DashboardPage"));
const OrdersPage = lazy(() => import("#pages/OrdersPage/OrdersPage"));
const ProductsPage = lazy(() => import("#pages/ProductsPage/ProductsPage"));
const SuppliersPage = lazy(() => import("#pages/SuppliersPage/SuppliersPage"));
const CustomersPage = lazy(() => import("#pages/CustomersPage/CustomersPage"));

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
