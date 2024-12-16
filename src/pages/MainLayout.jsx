import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Navbar, LoadingSpinner } from '../components';

const MainLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <LoadingSpinner />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default MainLayout;
