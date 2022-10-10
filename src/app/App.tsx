import React from 'react';
import { TestComponent } from 'features';
import { Footer, HeaderAnyPage, HeaderMain, LadIcon, MenuPopup } from 'shared';
import MainLayout from 'shared/ui/Layouts/MainLayout';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from './Routes';

const App = () => {
  const location = useLocation();
  const [popup, setPopup] = React.useState<string>('close-menu');
  const navigationList: string[] = [
    'Направления',
    'Условия',
    'Отбор',
    'Отзывы',
    'FAQ',
    'О компании',
  ];

  const handleMenuPopup = (value: string) => {
    setPopup(value);
  };

  return (
    <div className="App">
      {popup === 'open-menu' ? (
        <MenuPopup onClickClosePopup={handleMenuPopup} navigationList={navigationList} />
      ) : (
        <MainLayout>
          {location.pathname === '/' ? (
            <HeaderMain onClickMenuPopup={handleMenuPopup} navigationList={navigationList} />
          ) : (
            <HeaderAnyPage />
          )}
          <AppRoutes />
          <Footer />
        </MainLayout>
      )}
    </div>
  );
};

export default App;
