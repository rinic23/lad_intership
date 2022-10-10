import React from 'react';
import style from './main-layout.module.scss';

// interface TProps {
//   children: JSX.Element[];
// }

const MainLayout = ({ children }: any) => {
  const [page, setPage] = React.useState<string | null>(null);

  return <div className={style.wrapper}>{children}</div>;
};

export default MainLayout;
