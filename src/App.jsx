import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Cart, Checkout, Error, MainLayout, Landing, Login, Orders, Product, Products, Register } from './pages';
import { ErrorElement } from './components';
import { loader as LandingLoader } from './pages/Landing';
import { loader as ProductLoader } from './pages/Product';
import { loader as ProductsLoader } from './pages/Products';
import { loader as CheckoutLoader } from './pages/Checkout';
import { loader as OrdersLoader } from './pages/Orders';
import { action as RegisterAction } from './pages/Register';
import { action as LoginAction } from './pages/Login';
import { action as checkoutAction } from './components/CheckoutForm';
import { store } from './store';

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
        errorElement: <ErrorElement />,
        loader: ProductsLoader
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
        element: <Checkout />,
        loader: CheckoutLoader(store),
        action: checkoutAction(store)
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: OrdersLoader(store)
      },
    ]
  },
  {
    path:'/login',
    element: <Login />,
    errorElement: <Error />,
    action: LoginAction(store)
  },
  {
    path:'/register',
    element: <Register />,
    errorElement: <Error />,
    action: RegisterAction
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App