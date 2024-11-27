import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Cart, Checkout, Error, MainLayout, Landing, Login, Orders, Product, Products, Register } from './pages';
import { ErrorElement } from './components';
import { loader as LandingLoader } from './pages/Landing';
import { loader as ProductLoader } from './pages/Product';

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: LandingLoader,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <Product />,
        loader: ProductLoader,
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'orders',
        element: <Orders />
      },
    ]
  },
  {
    path:'/login',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path:'/register',
    element: <Register />,
    errorElement: <Error />
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App