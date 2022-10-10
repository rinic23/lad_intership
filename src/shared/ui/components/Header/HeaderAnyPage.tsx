import { paths } from 'app/Routes/configRoutes';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'shared/ui/icons';
import { Button } from '../Button';
import style from './header.module.scss';

export const HeaderAnyPage: React.FC = () => (
  <header className={style.wrapper}>
    <div className={style.container} style={{ justifyContent: 'left' }}>
      <Link to={paths.MAIN} className={style.any_page}>
        <div>
          <ArrowLeft />
        </div>
        <p>На главную</p>
      </Link>
      <Button
        size="rectangular"
        type="default"
        style={{
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '150%',
        }}
      >
        Подать заявку
      </Button>
    </div>
  </header>
);
