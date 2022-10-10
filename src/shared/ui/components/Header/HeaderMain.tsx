import { paths } from 'app/Routes/configRoutes';
import React from 'react';
import { Link } from 'react-router-dom';
import { LadIcon, MenuIcon } from 'shared/ui/icons';
import { Button } from '../Button';
import style from './header.module.scss';

type TProps = {
  onClickMenuPopup: (value: string) => void;
  navigationList: string[];
};

export const HeaderMain: React.FC<TProps> = ({ onClickMenuPopup, navigationList }) => {
  const openMenu = (value: string) => {
    onClickMenuPopup(value);
  };

  return (
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
        <Link to={paths.INNER} className={style.btn_apply}>
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
        </Link>
        {/* Временный костыль вместо кнопки, нет подходящей: чтобы была прозрачная, и только по ширине вложенного объекта */}
        <div
          onKeyDown={(e) => e.target}
          role="presentation"
          className={style.menuIcon}
          onClick={() => openMenu('open-menu')}
        >
          <MenuIcon />
        </div>
      </div>
    </header>
  );
};
