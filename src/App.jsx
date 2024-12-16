import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    }
  }
})

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
        loader: LandingLoader(queryClient),
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: ProductsLoader(queryClient),
      },
      {
        path: 'products/:id',
        element: <Product />,
        loader: ProductLoader(queryClient),
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
        action: checkoutAction(store, queryClient)
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: OrdersLoader(store, queryClient)
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
  return (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider> 
  );
}

export default App