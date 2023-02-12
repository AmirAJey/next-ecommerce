import { Field, Page } from '@/components';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <Page title="register">
      <div className="max-w-screen-sm mx-auto">
        <h1 className="text-3xl font-bold mb-5">Register</h1>
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(submitHandler)}
        >
          <Field
            label="Username"
            type="text"
            register={register('username', {
              required: 'username is required',
            })}
            error={errors.username}
          />
          <Field
            label="Email"
            type="text"
            register={register('email', {
              required: 'email is required',
              pattern: {
                value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/i,
                message: 'email is invalid',
              },
            })}
            error={errors.email}
          />
          <Field
            label="Password"
            type="password"
            register={register('password', {
              required: 'password is required',
              minLength: {
                value: 5,
                message: 'password must be at least 5 characters',
              },
            })}
            error={errors.password}
          />
          <div className="flex items-center justify-between mt-4">
            <button className="primary">Register</button>
            <p className="">
              have an account{' '}
              <Link href="/login" className="text-indigo-400">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Page>
  );
};

export default RegisterScreen;
