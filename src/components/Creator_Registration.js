import React from 'react';
import { useState } from 'react';
import InputField from './InputField';

const Creator_Registration = () => {
  const [formData, setFormData] = useState({
    Title: '',
    language: '',
    codeName: '',
    description: '',
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
      Title: '',
      language: '',
      codeName: '',
      description: '',
    });
  };
  return (
    <>
      <div className='flex justify-center w-full items-center my-10 mx-auto'>
        <form className='max-w-md mx-auto p-6' onSubmit={handleSubmit}>
          <div>
            <h1 className='flex justify-center items-center text-3xl text-pink-600 font-bold my-8'>
              Creator Registration
            </h1>

            <h1 className=' text-3xl font-bold mt-10'>Project Description</h1>
            <p className='  my-5 '>Tell us why your project is worthy !</p>

            <div>
              <InputField
                label={'Title'}
                value={formData.Title}
                onChange={handleChange}
              />
            </div>

            <div>
              <div>
                <InputField
                  label={'Language'}
                  value={formData.language}
                  onChange={handleChange}
                  type={'email'}
                />
              </div>
              <div>
                <InputField
                  label={'Code name'}
                  value={formData.codeName}
                  onChange={handleChange}
                  type={'number'}
                />
              </div>
              <div>
                <InputField
                  label={'Description'}
                  value={formData.description}
                  onChange={handleChange}
                  type={'text area'}
                />
              </div>
              <p className='my-4 font-bold text-center'>
                Already have an account?
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Creator_Registration;
