import React from 'react';
import { useState } from 'react';
import InputField from './InputField';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    Country: '',
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
    });
  };
  return (
    <>
      <div className='flex justify-center w-full items-center my-10 mx-auto'>
        <form className='max-w-md mx-auto p-6' onSubmit={handleSubmit}>
          <div>
            <h1 className='flex justify-center items-center text-3xl text-pink-600 font-bold'>
              Creator Registration
            </h1>
            <p className='my-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam dolore expedita porro quasi ad vitae unde autem veniam
              voluptas obcaecati a nam, quae adipisci dolorem, id nobis at
              officiis maxime harum sint minus. Commodi praesentium nostrum, vel
              qui excepturi optio similique totam quos dolor necessitatibus
              officia voluptatem nam inventore pariatur sint. Laboriosam iste
              pariatur, iure illum repellendus exercitationem dignissimos non
              dicta quo, maxime quam, ipsum amet architecto totam? Quae delectus
              itaque vero saepe voluptate, obcaecati necessitatibus voluptas
              molestias cum dolorum cumque aut ipsam id sequi dolores, soluta
              accusamus maxime. Error nihil doloribus repellat ratione, neque
              accusantium accusamus iusto laudantium reiciendis.
            </p>
            <h1 className='flex justify-center items-center text-3xl text-pink-600 font-bold'>
              Account Info
            </h1>
            <h1 className='flex justify-center items-center text-3xl my-5 font-bold'>
              Personal Information
            </h1>
            <p>Your Personal data will not be published</p>
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

export default Registration;
