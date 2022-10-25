import React from 'react';
import { useLocation } from 'react-router-dom';
import { Footer, HeaderSecondaryPage, Header } from 'shared';
import style from './main-layout.module.scss';

type TProps = {
  children: React.ReactNode;
  navigationList: string[];
  clickDrawer: () => void;
};

const MainLayout = ({ children, navigationList, clickDrawer }: TProps) => {
  const location = useLocation();

  return (
    <div className={style.wrapper}>
      {location.pathname === '/' ? (
        <Header navigationList={navigationList} clickDrawer={clickDrawer} />
      ) : (
        <HeaderSecondaryPage />
      )}
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
