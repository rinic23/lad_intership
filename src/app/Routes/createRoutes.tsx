import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute, TRoute } from '.';

export const createRoutes = (data: TRoute[]) =>
  data.map((el: TRoute) => {
    const route = (
      <Route key={el.id} path={el.path} element={el.element}>
        {el.children && createRoutes(el.children)}
      </Route>
    );
    return el.private ? (
      <Route key={el.id} element={<PrivateRoute />}>
        {route}
      </Route>
    ) : (
      route
    );
  });
