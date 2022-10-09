import { TestComponent } from 'features';
import React from 'react';
import { LadIcon } from 'shared';
import styles from './index.module.scss';

export const MainPage = () => (
  <div className={styles.wrapper}>
    <TestComponent a={0} />
    <LadIcon />
  </div>
);
