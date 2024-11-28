import React from 'react';
import { Filters, Pagination, ProductsContainer } from '../components';
import { customFetch } from '../utils';

const url = '/products';

export const loader = async({request}) => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;
  return {products, meta}
}

const Products = () => {
  return ( 
    <>
      <Filters />
      <ProductsContainer />
      <Pagination />
    </>

  )
}

export default Products