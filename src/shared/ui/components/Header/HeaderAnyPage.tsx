import React from 'react';
import { ArrowLeft } from 'shared/ui/icons';
import style from './header.module.scss';

type TProps = {
  onClickMenu: (value: string | null) => void;
};

export const HeaderAnyPage: React.FC<TProps> = ({ onClickMenu }) => {
  const changePage = (value: string | null) => {
    onClickMenu(value);
  };

  return (
    <header className={style.wrapper}>
      <div className={style.container}>
        <div
          onKeyDown={(e) => e.target}
          role="presentation"
          className={style.any_page}
          onClick={() => changePage(null)}
        >
          <div>
            <ArrowLeft />
          </div>
          <p>На главную</p>
        </div>
        <div
          onKeyDown={(e) => e.target}
          role="presentation"
          className={style.button_any}
          onClick={() => changePage('any_page')}
        >
          <button type="submit">Подать заявку</button>
        </div>
      </div>
    </header>
  );
};
