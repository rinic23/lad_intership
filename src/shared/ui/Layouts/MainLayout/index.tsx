import React from 'react';
import { useLocation } from 'react-router-dom';
import { Footer, HeaderSecondaryPage, Header } from 'shared';
import style from './main-layout.module.scss';

type TProps = {
  children: React.ReactNode;
  navigationList: string[];
  showDrawer: () => void;
};

const MainLayout = ({ children, navigationList, showDrawer }: TProps) => {
  const location = useLocation();

  return (
    <div className={style.wrapper}>
      {location.pathname === '/' ? (
        <Header navigationList={navigationList} showDrawer={showDrawer} />
      ) : (
        <HeaderSecondaryPage />
      )}
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
