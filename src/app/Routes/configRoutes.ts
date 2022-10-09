/* eslint-disable no-undef */
import * as Pages from 'pages';

export enum paths {
  MAIN = '/',
  REDIRECT = '/auth',
  AUTH = 'auth',
  INNER = 'inner',
  NOTFOUND = '*',
}

export type TRoute = {
  id: string;
  isPrivate: boolean;
  element: () => JSX.Element;
  path: string;
  children?: TRoute[];
};

export const configRoutes: TRoute[] = [
  {
    id: '1',
    isPrivate: true,
    element: Pages.MainPage,
    path: paths.MAIN,
    children: [
      {
        id: '4',
        isPrivate: true,
        element: Pages.InnerPage,
        path: paths.INNER,
      },
    ],
  },
  {
    id: '2',
    isPrivate: false,
    element: Pages.AuthPage,
    path: paths.AUTH,
  },
  {
    id: '3',
    isPrivate: false,
    element: Pages.Page404,
    path: paths.NOTFOUND,
  },
];
