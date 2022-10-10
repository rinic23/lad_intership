import React from 'react';
import { AppRoutes } from './Routes';
import { TestComponent } from 'features';
import { Footer, HeaderAnyPage, HeaderMain, LadIcon, MenuPopup } from 'shared';
import MainLayout from 'shared/ui/Layouts/MainLayout';

const App = () => {
  const [page, setPage] = React.useState<string | null>(null);
  const [popup, setPopup] = React.useState<string>('main');

  const handleMenu = (value: string | null) => {
    setPage(value);
  };

  const handleMenuPopup = (value: string) => {
    setPopup(value);
  };

  return (
    <div className="App">
      <AppRoutes />
      <MainLayout>
        {page === null ? (
          <HeaderMain onClickMenu={handleMenu} onClickMenuPopup={handleMenuPopup} />
        ) : (
          <HeaderAnyPage onClickMenu={handleMenu} />
        )}
        <TestComponent a={0} />
        <LadIcon />
        <Footer />
        {popup === 'open-menu' ? <MenuPopup /> : ''}
      </MainLayout>
    </div>
  );
};

export default App;
