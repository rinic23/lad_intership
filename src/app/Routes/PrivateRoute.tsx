import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'shared/lib';
import { paths } from './configRoutes';

export const PrivateRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to={paths.REDIRECT} />;
};
