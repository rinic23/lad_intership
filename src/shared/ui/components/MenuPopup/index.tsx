import React from 'react';
import { ExitIcon, LadIcon } from 'shared/ui/icons';
import style from './menu-popup.module.scss';

export const MenuPopup: React.FC = () => {
  console.log('message');

  const navigationList: string[] = [
    'Направления',
    'Условия',
    'Отбор',
    'Отзывы',
    'FAQ',
    'О компании',
  ];

  return (
    <div className={style.container}>
      <div className={style.container_header}>
        <div className={style.container_header_icon}>
          <LadIcon />
        </div>
        <div className={style.container_header_exit}>
          <ExitIcon />
        </div>
      </div>
      <ul className={style.container_list}>
        {navigationList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div onKeyDown={(e) => e.target} role="presentation" className={style.container_button}>
        <button type="submit">Подать заявку</button>
      </div>
    </div>
  );
};
