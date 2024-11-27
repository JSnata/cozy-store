import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { customFetch, generateAmountOptions } from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const url = '/products/';

export const loader = async ({ params }) => {
  const response = await customFetch(url + params.id);
  const product = response.data.data;
  return { product };
 }

const Product = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } = product.attributes;
  const dollarsAmount = price / 100;
  const [ productColor, setProductColor ] = useState(colors[0]);
  const [ amount, setAmount ] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  }

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img src={image} alt={title} className="w-96 h-96 object-cover rounded-lg lg:w-full" />
        <div className="">
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className='text-xl text-neutral-content font-bold mt-2'>{company}</h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h4 className="text-mmd font-md tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return <button key={color} type='button' className={`badge w-6 h-6 mr-2 ${color === productColor && 'border-2 border-secondary'}`} style={{backgroundColor: color}} onClick={() => setProductColor(color)}></button>
              })}
            </div>
          </div>
          {/* Amount */}
              <div className="form-control w-full max-w-xs">
                <label htmlFor='amount' className="label">
                  <h4 className="text-md font-medioum -tracking-wider capitalizw">amount</h4>
                </label>
                <select name="" id="amount" value={amount} onChange={handleAmount} className="select select-secondary select-bordered select-md">
                  {generateAmountOptions(20)}
                </select>
              </div>
          {/* Cart button */}
              <div className="mt-10">
                <button className='btn btn-secondary btn-md' onClick={() => console.log('add to cart')
                }>
                  add to cart
                </button>
              </div>
        </div>
      </div>
    </section>
  )
}

export default Product