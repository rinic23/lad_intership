import { AuthPage, MainPage, Page404 } from 'pages';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute, Pathes } from '.';

export const CreateRoutes: React.FC = () => (
  <Routes>
    <Route path={Pathes.MAIN} element={<PrivateRoute />}>
      <Route path={Pathes.MAIN} element={<MainPage />} />
    </Route>
    <Route path={Pathes.AUTH} element={<AuthPage />} />
    <Route path={Pathes.NOTFOUND} element={<Page404 />} />
  </Routes>
);
