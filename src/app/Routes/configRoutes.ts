/* eslint-disable no-undef */
import * as pages from 'pages';

export enum paths {
  MAIN = '/',
  REDIRECT = '/auth',
  AUTH = 'auth',
  INNER = 'inner',
  NOTFOUND = '*',
}

export type TRoute = {
  id: string;
  private: boolean;
  element: JSX.Element;
  path: string;
  children?: TRoute[];
};

export const configRoutes: TRoute[] = [
  {
    id: '1',
    private: true,
    element: pages.MainPage(),
    path: paths.MAIN,
    children: [
      {
        id: '4',
        private: true,
        element: pages.InnerPage(),
        path: paths.INNER,
      },
    ],
  },
  {
    id: '2',
    private: false,
    element: pages.AuthPage(),
    path: paths.AUTH,
  },
  {
    id: '3',
    private: false,
    element: pages.Page404(),
    path: paths.NOTFOUND,
  },
];
