import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'shared/lib';
import { Pathes } from './pathes';

export const PrivateRoute: React.FC = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to={Pathes.AUTH} />;
};
