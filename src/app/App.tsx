import React from 'react';
import { MenuPopup } from 'shared';
import MainLayout from 'shared/ui/Layouts/MainLayout';
import { AppRoutes } from './Routes';

const App = () => {
  const [open, setOpen] = React.useState(false);
  const navigationList: string[] = [
    'Направления',
    'Условия',
    'Отбор',
    'Отзывы',
    'FAQ',
    'О компании',
  ];

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      {open ? (
        <MenuPopup onClose={onClose} navigationList={navigationList} open={open} />
      ) : (
        <MainLayout navigationList={navigationList} showDrawer={showDrawer}>
          <AppRoutes />
        </MainLayout>
      )}
    </div>
  );
};

export default App;
