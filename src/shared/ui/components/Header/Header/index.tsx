import React from 'react';
import { paths } from 'app/Routes/configRoutes';
import { Link } from 'react-router-dom';
import { LadIcon, MenuIcon } from 'shared/ui/icons';
import { Button } from '../../Button';
import style from './header.module.scss';

type TProps = {
  navigationList: string[];
  clickDrawer: () => void;
};

export const Header = ({ navigationList, clickDrawer }: TProps) => (
  <header className={style.wrapper}>
    <div className={style.container}>
      <Link to={paths.MAIN} className={style.ladIcon}>
        <LadIcon />
      </Link>
      <ul className={style.list}>
        {navigationList.map((item) => (
          <Link to={paths.INNER} key={item}>
            <li>{item}</li>
          </Link>
        ))}
      </ul>
      <div className={style.btn_group}>
        <Link to={paths.INNER} className={style.btn_apply}>
          <Button size="medium" type="default">
            Подать заявку
          </Button>
        </Link>
        <Button
          size="rectangular__medium"
          type="transparent"
          className={style.menuIcon}
          onClick={clickDrawer}
        >
          <MenuIcon />
        </Button>
      </div>
    </div>
  </header>
);
