import React, { useState } from 'react';
import { MenuPopup } from 'shared';
import MainLayout from 'shared/ui/Layouts/MainLayout';
import { AppRoutes } from './Routes';

const App = () => {
  const [open, setOpen] = useState(false);
  const navigationList = ['Направления', 'Условия', 'Отбор', 'Отзывы', 'FAQ', 'О компании'];

  const clickDrawer = () => setOpen(!open);

  return (
    <div className="App">
      {open ? (
        <MenuPopup clickDrawer={clickDrawer} navigationList={navigationList} open={open} />
      ) : (
        <MainLayout navigationList={navigationList} clickDrawer={clickDrawer}>
          <AppRoutes />
        </MainLayout>
      )}
    </div>
  );
};

export default App;
