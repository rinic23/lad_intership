import React from 'react';
import { paths } from 'app/Routes/configRoutes';
import { Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { ExitIcon, LadIcon } from 'shared/ui/icons';
import { Button } from '../Button';
import style from './menu-popup.module.scss';

type TProps = {
  navigationList: string[];
  onClose: () => void;
  open: boolean;
};

export const MenuPopup = ({ navigationList, onClose, open }: TProps) => (
  <div className={style.container}>
    <Drawer
      title={<LadIcon />}
      closeIcon={<ExitIcon />}
      footer={
        <Button
          size="rectangular"
          type="default"
          style={{
            font: 'var(--font-text-regular)',
            width: '100%',
          }}
        >
          Подать заявку
        </Button>
      }
      placement="top"
      onClose={onClose}
      open={open}
      height="100%"
      getContainer={false}
    >
      <ul className={style.container_list}>
        {navigationList.map((item) => (
          <Link to={paths.INNER} key={item} onClick={onClose}>
            <li>{item}</li>
          </Link>
        ))}
      </ul>
    </Drawer>
  </div>
);
