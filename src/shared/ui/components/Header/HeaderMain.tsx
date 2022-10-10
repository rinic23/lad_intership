import React from 'react';
import { LadIcon, MenuIcon } from 'shared/ui/icons';
import style from './header.module.scss';

type TProps = {
  onClickMenu: (value: string | null) => void;
  onClickMenuPopup: (value: string) => void;
};

export const HeaderMain: React.FC<TProps> = ({ onClickMenu, onClickMenuPopup }) => {
  const navigationList: string[] = [
    'Направления',
    'Условия',
    'Отбор',
    'Отзывы',
    'FAQ',
    'О компании',
  ];

  const changePage = (value: string | null) => {
    onClickMenu(value);
  };

  const openMenu = (value: string) => {
    onClickMenuPopup(value);
  };

  return (
    <header className={style.wrapper}>
      <div className={style.container}>
        <div
          onKeyDown={(e) => e.target}
          role="presentation"
          className={style.ladIcon}
          onClick={() => changePage(null)}
        >
          <LadIcon />
        </div>
        <ul
          className={style.list}
          onKeyDown={(e) => e.target}
          role="presentation"
          onClick={() => changePage('any_page')}
        >
          {navigationList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div
          onKeyDown={(e) => e.target}
          role="presentation"
          className={style.button}
          onClick={() => changePage('any_page')}
        >
          <button type="submit">Подать заявку</button>
        </div>
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
