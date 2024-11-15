import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <nav>
        <span className='text-4xl text-primary'>Cozy Store</span>
      </nav>
      <Outlet />
    </>
  )
}

export default MainLayout