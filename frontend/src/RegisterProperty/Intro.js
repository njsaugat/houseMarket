import React, { useState } from 'react';
// rounded-tr-2xl rounded-br-2xl
const buttonProperty = 'px-3 py-1  w-1/2 ';
const selectedProperty = `${buttonProperty} bg-gradient-to-t from-sky-400 to-cyan-100 font-bold tracking-wider `;
const Intro = () => {
  const [rentClicked, setRent] = useState(false);

  return (
    <>
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

      <div className=" flex my-5 self-center  w-1/2 bg-cyan-100 rounded-3xl p-1">
        <button
          className={
            rentClicked
              ? selectedProperty + ' rounded-tl-2xl rounded-bl-2xl'
              : buttonProperty
          }
          onClick={(e) => {
            e.preventDefault();

            setRent(true);
          }}
        >
          Rent
        </button>
        <button
          className={
            rentClicked
              ? buttonProperty
              : selectedProperty + ' rounded-tr-2xl rounded-br-2xl'
          }
          onClick={(e) => {
            e.preventDefault();
            setRent(false);
          }}
        >
          Sale
        </button>
      </div>
      <div className=" flex flex-col my-5 self-center  w-1/2 ">
        <label Htfor="myfile">Select a file:</label>
        <input type="file" id="myfile" name="myfile"></input>
      </div>
    </>
  );
};

export default Intro;
