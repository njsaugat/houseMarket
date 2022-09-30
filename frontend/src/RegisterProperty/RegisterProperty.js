import React, { useState } from 'react';
import PrevNext from './PrevNext';
import ProgressSteps from './ProgressSteps';

const RegisterProperty = () => {
  const [step, setStep] = useState(0);
  return (
    <div>
      <div className="left my-10">
        <ProgressSteps step={step} setStep={setStep} />
      </div>
      <div className="right">
        <form action="">
          <div className="option flex flex-col my-5 self-center  w-1/2 ">
            <label className="font-bold tracking-wider mb-1" htmlFor="name">
              Name
            </label>
            <input
              className="border-gray-300 border-0 shadow-md  bg-gray-100 w-full  rounded-lg  px-3 py-2 outline-0 "
              type="text"
              name="name"
            />
          </div>
          <div className="option flex flex-col my-5 self-center  w-1/2 ">
            <label className="font-bold tracking-wider mb-1" htmlFor="name">
              Bedrooms
            </label>
            <input
              className="border-gray-300 border-0 shadow-md  bg-gray-100 w-full  rounded-lg  px-3 py-2 outline-0 "
              type="number"
              name="name"
            />
          </div>
          <div className="option flex flex-col my-5 self-center  w-1/2 ">
            <label className="font-bold tracking-wider mb-1" htmlFor="name">
              Living Rooms
            </label>
            <input
              className="border-gray-300 border-0 shadow-md  bg-gray-100 w-full  rounded-lg  px-3 py-2 outline-0 "
              type="number"
              name="name"
            />
          </div>
          <div className="option flex flex-col my-5 self-center  w-1/2 ">
            <label className="font-bold tracking-wider mb-1" htmlFor="name">
              Bathrooms
            </label>
            <input
              className="border-gray-300 border-0 shadow-md  bg-gray-100 w-full  rounded-lg  px-3 py-2 outline-0 "
              type="number"
              name="name"
            />
          </div>
          <div className="option flex flex-col my-5 self-center  w-1/2 ">
            <label className="font-bold tracking-wider mb-1" htmlFor="name">
              Address
            </label>
            <input
              className="border-gray-300 border-0 shadow-md  bg-gray-100 w-full  rounded-lg  px-3 py-2 outline-0 "
              type="text"
              name="name"
            />
          </div>
          <div className="option flex flex-col my-5 self-center  w-1/2 ">
            <label className="font-bold tracking-wider mb-1" htmlFor="name">
              Descriptions
            </label>
            <input
              className="border-gray-300 border-0 shadow-md  bg-gray-100 w-full  rounded-lg  px-3 py-2 outline-0 "
              type="text"
              name="name"
            />
          </div>
        </form>
      </div>
      <PrevNext step={step} setStep={setStep} />
    </div>
  );
};

export default RegisterProperty;
