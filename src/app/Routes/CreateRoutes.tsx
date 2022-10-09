import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute, configRoutes } from '.';

export const CreateRoutes: React.FC = () => (
  <Routes>
    {configRoutes.map((el) =>
      el.private ? (
        <Route key={el.id} element={<PrivateRoute />}>
          <Route path={el.path} element={el.element} />
        </Route>
      ) : (
        <Route key={el.id} path={el.path} element={el.element} />
      ),
    )}
  </Routes>
);
