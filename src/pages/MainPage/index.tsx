import { TestComponent } from 'features';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { LadIcon } from 'shared';
import styles from './index.module.scss';

export const MainPage = () => (
  <div className={styles.wrapper}>
    <Outlet />
    <TestComponent a={0} />
    <LadIcon />
  </div>
);
