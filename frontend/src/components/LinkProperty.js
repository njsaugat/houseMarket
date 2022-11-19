import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { Axios } from 'axios';
import ShowPortal from './ShowPortal';
// const crossIcon = <FontAwesomeIcon icon={faXmark} />;
const DESCRIPTION_MAX_LENGTH = 100;
const buttonProperty = `py-2 px-5  rounded-lg bg-gradient-to-t from-sky-400 to-cyan-100  tracking-wide text-black shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const LinkProperty = ({ property, smallDisplay, validUser, user }) => {
  const [showOptions, setShowOptions] = useState(false);
  // const [overflow, setOverflow] = useState(false);
  // useEffect(() => {
  //   if (overflow) {
  //     document.getElementById('root').style.overflowX = 'hidden';
  //   } else {
  //     document.getElementById('root').style.overflowX = 'hiddenx';
  //   }
  // }, [overflow]);
  // useEffect(()=>{
  //   const removeTheOptions=()=>setShowOptions(false);
  //   window.addEventListener('click',removeTheOptions)
  //   return ()=>{
  //     window.removeEventListener('click',removeTheOptions)

  //   }
  // })
  const updateProperty = { ...property, update: true };
  const propertyApt = { ...property, owner: user || property.owner };
  return (
    <Link
      // className="property flex  bg-slate-50 m-5 p-8 gap-4 w-11/12 md:w-3/5 lg:w-2/5 rounded-xl shadow-lg hover:shadow-xl hover:bg-white   transition-shadow   duration-300 "
      className="property flex flex-col bg-slate-50 m-5 p-8 gap-4 w-11/12 md:w-4/5 lg:w-2/5 rounded-xl shadow-lg hover:shadow-xl hover:bg-white   transition-shadow   duration-300 "
      key={property.id}
      to={`/explore/property/${property.id}`}
      state={propertyApt}
    >
      <div className="w-full h-full flex gap-x-2">
        <div className="image w-1/3">
          <img
            className="rounded-3xl object-cover  hover:scale-105 transition-transform w-full h-full  "
            src={
              'http://127.0.0.1:5000/' +
              property.imageUrl.substring(property.imageUrl.indexOf('photo'))
            }
            alt=""
            srcSet=""
            loading="lazy"
          />
        </div>
        <div className="h-full w-2/3">
          <h1 className="font-bold tracking-wide text-lg capitalize">
            {property.name}
          </h1>

          <p className="text-slate-500 text-sm leading-4 my-3">
            {property.description.substring(0, DESCRIPTION_MAX_LENGTH) + '...'}
          </p>

          <div className="attributes flex items-center gap-5 gap-x-20 ">
            <span className="price text-lg font-bold">
              रु {numberWithCommas(property.price)}
            </span>
            {!smallDisplay && (
              <span className="type">{property.propertyType}</span>
            )}
          </div>
          {/* <div className="location text-slate-500 text-sm mt-1">
                    {' '}
                    {property.location}
                  </div> */}
          <hr className="my-3" />
          <div className="owner mt-2">{property.location}</div>
        </div>
      </div>
      {validUser && (
        <div className="flex justify-around relative">
          <Link
            to={'/register-property'}
            state={updateProperty}
            className={buttonProperty}
            // update={true}
          >
            Update
          </Link>
          <div
            onClick={(e) => {
              e.preventDefault();
              setShowOptions(true);
              // setOverflow(true)
              // document.getElementById('root').style.overflow = 'hidden';
              // console.log(document.body.getElementById('root'));
            }}
            className={`${buttonProperty} bg-gradient-to-t from-red-400 to-red-200 cursor-pointer`}
          >
            Delete
          </div>
          {showOptions && (
            <ShowPortal
              showOptions={showOptions}
              // closeModal={() => setShowOptions(false)}
              setShowOptions={setShowOptions}
              // setOverflow={setOverflow}
              property={property}
              message={'Do you want to delete this property?'}
            />
          )}
        </div>
      )}
      {/* {validUser && (
        <div
          className="h-full relative "
          onClick={(e) => {
            e.preventDefault();
            setShowOptions(true);
          }}
        >
          <span className="w-10 h-10 bg-gradient-to-t from-slate-400 to-slate-100 rounded-full  flex items-center justify-center">
            {menuIcon}
          </span>
          {console.log(showOptions)}
          {showOptions && (
            <div className=" absolute top-0 w-20 h-20 z-100 bg-gradient-to-t  from-slate-300 to-slate-100 flex flex-col items-center justify-center shadow-lg">
              <span>Update</span>
              <span>Delete</span>
            </div>
          )}
          <ShowUpdateDelete
            showOptions={showOptions}
            closeModal={() => setShowOptions(false)}
          />
        </div>
      )} */}
    </Link>
  );
};

export default LinkProperty;
