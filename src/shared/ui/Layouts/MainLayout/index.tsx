import React from 'react';
import style from './main-layout.module.scss';

type TProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<TProps> = ({ children }) => (
  <div className={style.wrapper}>{children}</div>
);

export default MainLayout;
