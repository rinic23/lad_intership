import { paths } from 'app/Routes/configRoutes';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'shared/ui/icons';
import { Button } from '../../Button';
import style from './header-inner.module.scss';

export const HeaderSecondaryPage = () => (
  <header className={style.wrapper}>
    <div className={style.container}>
      <Link to={paths.MAIN} className={style.any_page}>
        <div>
          <ArrowLeft />
        </div>
        <p>На главную</p>
      </Link>
      <Button size="medium" type="default">
        Подать заявку
      </Button>
    </div>
  </header>
);
