import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components'

const MainLayout = () => {
  return (
    <>
      <Header />
      <section className='align-element py-20'>
        <Outlet />
      </section>
    </>
  )
}

export default MainLayout