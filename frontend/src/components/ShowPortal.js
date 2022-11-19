import React from 'react';
import { createPortal } from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from 'react-router-dom';

const crossIcon = <FontAwesomeIcon icon={faXmark} />;

const ShowPortal = ({
  showOptions,
  setShowOptions,
  property,
  message,
  logOut,
}) => {
  const navigate = useNavigate();
  if (!showOptions) {
    return null;
  }
  return createPortal(
    <div
      onClick={(e) => {
        e.preventDefault();
        setShowOptions(false);
      }}
      className={`fixed font-poppins top-0 left-0 right-0 bottom-0 opacity-95 z-100 bg-gray-600 ${
        showOptions === true ? 'active' : 'inactive'
      }`}
    >
      <div
        className="z-100 bg-white fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 
      w-4/5 md:w-1/2 lg:w-1/4 rounded-xl   p-5 "
      >
        <div className="flex justify-between items-center w-full relative">
          <h1 className="flex justify-center items-center">{message}</h1>
          <div
            onClick={(e) => {
              e.preventDefault();
              setShowOptions(false);
            }}
            className="cursor-pointer text-red-600 text-3xl "
          >
            {crossIcon}
          </div>
        </div>
        <div className="flex w-full mt-4 ">
          <div
            onClick={(e) => {
              e.preventDefault();
              setShowOptions(false);
            }}
            className=" cursor-pointer w-1/2 border-r-2 flex justify-center items-center p-2"
          >
            Cancel
          </div>
          <button
            onClick={(e) => {
              // send Axios delete request
              if (property) {
                console.log(`/property/${property.id}`);
                fetch(`/property/${property.id}`, {
                  method: 'DELETE',
                }).then((res) => {
                  res.json();
                  // @TODO: reload the page after removal or manage the state;
                  // window.location.reload();
                });
                navigate('/loading');
                setTimeout(() => {
                  navigate('/');
                }, 2000);
                // remove from current listing as well
              }
              if (logOut) {
                console.log(logOut);
                fetch('/logout', {
                  method: 'POST',
                }).then((res) => {
                  // res.json();
                  // navigate('/');
                });
                navigate('/loading');
                setTimeout(() => {
                  navigate('/');
                  window.location.reload(false);
                }, 2000);
              }
            }}
            className=" p-2 tracking-widest cursor-pointer w-1/2 bg-gradient-to-t from-red-600 to-red-400 flex justify-center items-center"
          >
            {logOut ? 'Yes' : 'OK'}
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('portal2')
  );
};
export default ShowPortal;
