import React from 'react';
import { LadIcon, VkIcon, YoutubeIcon } from 'shared/ui/icons';
import style from './footer.module.scss';

export const Footer = () => (
  <footer className={style.wrapper}>
    <div className={style.container}>
      <div className={style.ladIcon}>
        <LadIcon />
      </div>
      <ul className={style.list}>
        <li>© 1992-2022. Все права защищены</li>
        <li>Пользовательское соглашение</li>
        <li>Политика конфиденциальности</li>
      </ul>
      <div className={style.links}>
        <a href="https://vk.com/lad_it" target="_blank" rel="noreferrer">
          <VkIcon />
        </a>
        <a href="https://www.youtube.com/c/ITcompanyLad" target="_blank" rel="noreferrer">
          <YoutubeIcon />
        </a>
      </div>
    </div>
  </footer>
);
