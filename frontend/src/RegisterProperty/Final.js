import React from 'react';

const Final = () => {
  return (
    <>
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
          Description
        </label>
        <input
          className="border-gray-300 border-0 shadow-md  bg-gray-100 w-full  rounded-lg  px-3 py-2 outline-0 "
          type="text"
          name="name"
        />
      </div>
    </>
  );
};

export default Final;
