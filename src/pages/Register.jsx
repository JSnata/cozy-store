import React from 'react';
import { FormInput, SubmitButton } from '../components';
import { Form, Link, redirect } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post('/auth/local/register', data);
    toast('account created');
    return redirect
  } catch (error) {
    const errorMessage = error?.response?.data?.error?.message || 'there is an error';
    toast.error(errorMessage);
    return null;
  }
}

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
        <Form method='post' className='card w-96 p-8 bg-base-100 shadow-lg flex flrx-col gap-y-4'>
            <h4 className='text-center text-3xl font-bold'>Register</h4>
            <FormInput type='text' label='Username' name='username' defaultValue="nata" />
            <FormInput type='email' label='Email' name='email' defaultValue="nata@gmail.com" />
            <FormInput type='password' label='Password' name="password" defaultValue="password"/>
            <div className="mt-4 ">
                <SubmitButton text='Register' />
            </div>
            <p className="text-center">
                Already a member?<Link to='/login' className='ml-2 link link-hover link-primary capitalize'>Login</Link>
            </p>
        </Form>
    </section>
  )
}

export default Register