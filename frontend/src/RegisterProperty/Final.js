import React from 'react';

const Final = () => {
  return (
    <>
      <div className="option flex flex-col my-5 self-center  w-3/5 ">
        <label className="font-bold tracking-wider mb-1" htmlFor="price">
          Price
        </label>
        <input
          className="border-gray-300 border-0 shadow-md  bg-gray-100 w-full  rounded-lg  px-3 py-2 outline-0 "
          id="price"
          type="number"
          name="name"
          min={0}
          placeholder="Rs."
        />
      </div>
      <div className="option flex flex-col my-5 self-center  w-3/5 ">
        <label className="font-bold tracking-wider mb-1" htmlFor="address">
          Address
        </label>
        <input
          className="border-gray-300 border-0 shadow-md  bg-gray-100 w-full  rounded-lg  px-3 py-2 outline-0 "
          type="text"
          name="name"
          id="address"
        />
      </div>
      <div className="option flex flex-col my-5 self-center  w-3/5 ">
        <label className="font-bold tracking-wider mb-1" htmlFor="description">
          Description
        </label>
        <textarea
          className="border-gray-300 border-0 shadow-md  bg-gray-100 w-full  rounded-lg  px-3 py-2 outline-0 resize-none h-2 "
          type="text"
          name="name"
          id="description"
        ></textarea>
      </div>
    </>
  );
};

export default Final;
