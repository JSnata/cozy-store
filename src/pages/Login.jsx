import React from 'react';
import { FormInput, SubmitButton } from '../components';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

export const action = (store) => async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post('/auth/local', data);
    store.dispatch(loginUser(response.data));
    toast('logged in');
    return redirect('/');
  } catch (error) {
    const errorMessage = error?.response?.data?.error?.message || 'there is an error';
    toast.error(errorMessage);
    return null;
  }
}

const Login = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret'
      })
      dispatch(loginUser(response.data));
      toast.success('welcome guest user');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  return (
    <section className='h-screen grid place-items-center'>
    <Form method='post' className='card w-96 p-8 bg-base-100 shadow-lg flex flrx-col gap-y-4'>
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput type='email' label='Email' name='identifier' />
        <FormInput type='password' label='Password' name="password"/>
        <div className="mt-4 ">
            <SubmitButton text='Login' />
        </div>
        <button type="button" className='btn btn-secondary btn-block capitalize' onClick={loginAsGuestUser}>guest user</button>
        <p className="text-center">
            Not a member yet?<Link to='/register' className='ml-2 link link-hover link-primary capitalize'>register</Link>
        </p>
    </Form>
    </section>
  )
}

export default Login