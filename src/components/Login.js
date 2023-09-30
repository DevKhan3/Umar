import React from 'react';
import InputField from './InputField';
import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      username: '',
      password: '',
    });
  };
  return (
    <>
      <div className='flex justify-center w-full items-center my-10 mx-auto'>
        <form className='max-w-md mx-auto p-6' onSubmit={handleSubmit}>
          <div>
            <h1 className='text-center text-3xl text-pink-600 font-bold my-8'>
              Login
            </h1>
            <div>
              <InputField
                label={'Username or Email Address'}
                value={formData.username}
                onChange={handleChange}
                type={'email'}
              />
            </div>

            <div>
              <div>
                <InputField
                  label={'Password'}
                  value={formData.password}
                  onChange={handleChange}
                  type={'password'}
                />
              </div>
              <p className='my-1'>Forgot your password ?</p>
              <div className='flex gap-2 items-center mt-3'>
                <input type='checkbox' />
                <p>Remember me</p>
              </div>
            </div>
          </div>
          <button
            type='submit'
            className='bg-blue-500 px-6  py-2 text-white text-lg rounded-md mt-8'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
