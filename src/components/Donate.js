import React, { useState } from 'react';
import InputField from './InputField';
import { FaCcPaypal } from 'react-icons/fa';

const Donate = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    Country: '',
    City: '',
    Street: '',
    zipCode: '',
    Creator: '',
    typeofPayment: '',
    Amount: '',
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
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      Country: '',
      City: '',
      Street: '',
      zipCode: '',
      Creator: '',
      typeofPayment: '',
      Amount: '',
    });
  };

  const Icons = [
    <FaCcPaypal size={40} />,
    <FaCcPaypal size={40} />,
    <FaCcPaypal size={40} />,
    <FaCcPaypal size={40} />,
    <FaCcPaypal size={40} />,
  ];

  return (
    <>
      <div className='flex justify-center w-full items-center my-10 mx-auto'>
        <form className='max-w-md mx-auto p-6' onSubmit={handleSubmit}>
          <div>
            <h1 className='flex justify-center items-center text-3xl text-pink-600 font-bold'>
              Donate
            </h1>
            <div className='flex flex-row gap-4'>
              <div>
                <InputField
                  label={'First name'}
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <InputField
                  label={'Last name'}
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div>
                <InputField
                  label={'Email'}
                  value={formData.email}
                  onChange={handleChange}
                  type={'email'}
                />
              </div>
              <div>
                <InputField
                  label={'Phone number'}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  type={'number'}
                />
              </div>
              <div>
                <InputField
                  label={'Country'}
                  value={formData.Country}
                  onChange={handleChange}
                />
              </div>
              <div>
                <InputField
                  label={'City'}
                  value={formData.City}
                  onChange={handleChange}
                />
              </div>
              <div>
                <InputField
                  label={'Street'}
                  value={formData.Street}
                  onChange={handleChange}
                />
              </div>
              <div>
                <InputField
                  label={'Zip code'}
                  value={formData.zipCode}
                  onChange={handleChange}
                  type={'number'}
                />
              </div>
              <div>
                <InputField
                  label={'Creator'}
                  value={formData.Creator}
                  onChange={handleChange}
                />
              </div>
              <div>
                <InputField
                  label={'Type of payment'}
                  value={formData.typeofPayment}
                  onChange={handleChange}
                />
              </div>
              <div>
                <InputField
                  label={'Amount'}
                  value={formData.Amount}
                  onChange={handleChange}
                  type={'number'}
                />
              </div>
            </div>
            <div className='my-4'>
              <h1 className='font-bold'>Payment Methods</h1>
              <div className='flex flex-col gap-3 mt-3'>
                {Icons.map((icon) => (
                  <div className='flex gap-3'>
                    <input type='checkbox' />
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Donate;
