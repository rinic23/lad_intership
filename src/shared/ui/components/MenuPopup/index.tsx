import { paths } from 'app/Routes/configRoutes';
import React from 'react';
import { Link } from 'react-router-dom';
import { ExitIcon, LadIcon } from 'shared/ui/icons';
import { Button } from '../Button';
import style from './menu-popup.module.scss';

type TProps = {
  onClickClosePopup: (value: string) => void;
  navigationList: string[];
};

export const MenuPopup: React.FC<TProps> = ({ onClickClosePopup, navigationList }) => {
  const closePopup = (value: string) => {
    onClickClosePopup(value);
  };

  return (
    <div className={style.container}>
      <div className={style.container_header}>
        <div className={style.container_header_icon}>
          <LadIcon />
        </div>
        {/* Временный костыль вместо кнопки,
        нет подходящей: чтобы была прозрачная,
        и только по ширине вложенного объекта */}
        <div
          onKeyDown={(e) => e.target}
          role="presentation"
          style={{ cursor: 'pointer' }}
          onClick={() => closePopup('close-menu')}
        >
          <ExitIcon />
        </div>
      </div>
      <ul className={style.container_list}>
        {navigationList.map((item) => (
          <Link to={paths.INNER} key={item} onClick={() => closePopup('close-menu')}>
            <li>{item}</li>
          </Link>
        ))}
      </ul>
      {/* Дополнительно пришлось прописывать button в scss,
      ибо кнопка не стандартная, со слов дизайнера
      предполагается растягивание ее на всю ширину экрана */}
      <Button
        size="rectangular"
        type="default"
        style={{
          font: 'var(--font-text-regular-mobile)',
        }}
      >
        Подать заявку
      </Button>
    </div>
  );
};
