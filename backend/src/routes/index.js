import { userRoutes } from './userRoutes.js';
import { dashboardRoutes } from './dashboardRoutes.js';
import { customerRoutes } from './customerRoutes.js';
import { productRoutes } from './productRoutes.js';
import { supplierRoutes } from './supplierRoutes.js';
import { orderRoutes } from './orderRoutes.js';

export const initRoutes = app => {
  app.use('/api/users', userRoutes);
  app.use('/api/dashboard', dashboardRoutes);
  app.use('/api/customers', customerRoutes);
  app.use('/api/products', productRoutes);
  app.use('/api/suppliers', supplierRoutes);
  app.use('/api/orders', orderRoutes);
};
