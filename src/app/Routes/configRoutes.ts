import * as pages from 'pages';

export enum paths {
  MAIN = '/',
  AUTH = 'auth',
  NOTFOUND = '*',
}

export const configRoutes = [
  {
    id: '1',
    private: true,
    element: pages.MainPage(),
    path: paths.MAIN,
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
