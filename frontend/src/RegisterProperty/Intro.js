import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const buttonProperty = 'px-3 py-1  w-1/2 transition-all ease-out';
const selectedProperty = `${buttonProperty} bg-gradient-to-t from-sky-400 to-cyan-100 font-bold tracking-wider `;

const plusIcon = <FontAwesomeIcon icon={faPlus} />;

const Intro = () => {
  const [rentClicked, setRent] = useState(false);
  const previewImage = useRef(null);

  return (
    <>
      <div className="option flex flex-col my-5 self-center  w-1/2 ">
        <label className="font-bold tracking-wider mb-1" htmlFor="name">
          Name
        </label>
        <input
          className="border-gray-300 border-0 shadow-md  bg-gray-100 w-full  rounded-lg  px-3 py-2 outline-0 "
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter the property's name"
        />
      </div>
      <div className="flex flex-col my-5 self-center  w-1/2 ">
        <p className="font-bold tracking-wider mb-1 self-start " htmlFor="name">
          Select property type
        </p>
        <div className=" flex my-5 self-center  w-full lg:w-10/12 bg-cyan-100 rounded-3xl p-1  ">
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
      </div>
      <span className="font-bold tracking-wider mb-1  w-1/2 ">
        Choose Image:
      </span>
      <div className=" flex  my-5 self-center  w-1/2 items-center justify-evenly  ">
        <img
          id="viewProperty"
          src="#"
          ref={previewImage}
          className={'hidden '}
          loading="lazy"
          alt=""
        ></img>
        <label
          htmlFor="myfile"
          className="font-bold tracking-wide  w-32 h-32  my-5 self-center  flex flex-col items-center justify-center rounded-md cursor-pointer border-2 border-dashed bg-gray-100"
        >
          <span className="text-4xl">{plusIcon}</span>
          <small className="text-gray-400">Choose a photo*</small>
        </label>

        <input
          type="file"
          id="myfile"
          name="myfile"
          className="hidden"
          accept="image/*"
          required
          onChange={(e) => {
            const [file] = e.target.files;
            if (file) {
              previewImage.current.src = URL.createObjectURL(file);
              previewImage.current.className = 'h-36 w-48';
            }
          }}
        ></input>
      </div>
    </>
  );
};

// this is the wat
export default Intro;
