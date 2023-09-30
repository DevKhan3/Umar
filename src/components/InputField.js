import React from 'react';

const InputField = ({ label, name, type }) => {
  return (
    <>
      <div className='grid grid-cols-1 w-full'>
        <div className='grid grid-cols-1fr 3fr gap-1 mt-3'>
          <label className='font-bold' htmlFor={name}>
            {label}
          </label>
          <input
            type={type}
            className='border-2 border-neutral-600 outline-none py-1 rounded-md w-full  px-5'
          />
        </div>
      </div>
    </>
  );
};

export default InputField;
