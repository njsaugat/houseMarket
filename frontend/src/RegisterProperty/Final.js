import React, { useContext } from 'react';
import PrevNext from './PrevNext';
import { FormContext } from './RegisterProperty';

const Final = () => {
  const { formState, setState } = useContext(FormContext);
  const { step, setStep } = useContext(FormContext);

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
          name="price"
          min={0}
          required
          placeholder="Rs."
          value={formState.price}
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, price: e.target.value };
            });
          }}
        />
      </div>
      <div className="option flex flex-col my-5 self-center  w-3/5 ">
        <label className="font-bold tracking-wider mb-1" htmlFor="address">
          Address
        </label>
        <input
          className="border-gray-300 border-0 shadow-md  bg-gray-100 w-full  rounded-lg  px-3 py-2 outline-0 "
          type="text"
          name="address"
          id="address"
          required
          value={formState.address}
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, address: e.target.value };
            });
          }}
        />
      </div>
      <div className="option flex flex-col my-5 self-center  w-3/5 ">
        <label className="font-bold tracking-wider mb-1" htmlFor="description">
          Description
        </label>
        <textarea
          className="border-gray-300 border-0 shadow-md  bg-gray-100 w-full  rounded-lg  px-3 py-2 outline-0 resize-none h-28 "
          type="text"
          name="description"
          id="description"
          required
          value={formState.description}
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, description: e.target.value };
            });
          }}
        ></textarea>
      </div>
      <PrevNext step={step} setStep={setStep} />
      {/* <button type="submit">Submit</button> */}
    </>
  );
};

export default Fina;
