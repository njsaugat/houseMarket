import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { createPortal } from 'react-dom';
const menuIcon = <FontAwesomeIcon icon={faEllipsisVertical} />;
const DESCRIPTION_MAX_LENGTH = 100;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const LinkProperty = ({ property, smallDisplay, validUser, user }) => {
  const [showOptions, setShowOptions] = useState(false);
  const ShowPortal = () => {
    return createPortal(
      <div>
        <div>Update</div>
        <div className="text-red-500">Delete</div>
      </div>,
      document.getElementById('portal')
    );
  };
  const propertyApt = { ...property, owner: user || property.owner };
  return (
    <Link
      // className="property flex  bg-slate-50 m-5 p-8 gap-4 w-11/12 md:w-3/5 lg:w-2/5 rounded-xl shadow-lg hover:shadow-xl hover:bg-white   transition-shadow   duration-300 "
      className="property flex  bg-slate-50 m-5 p-8 gap-4 w-11/12 md:w-4/5 lg:w-2/5 rounded-xl shadow-lg hover:shadow-xl hover:bg-white   transition-shadow   duration-300 "
      key={property.id}
      to={`/explore/property/${property.id}`}
      state={propertyApt}
    >
      <div className="image w-1/3">
        <img
          className="rounded-3xl object-cover opacity-95 hover:scale-105 transition-transform w-full h-full  "
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
      {validUser && (
        <div
          className="h-full  "
          onClick={(e) => {
            e.preventDefault();
            setShowOptions(true);
          }}
        >
          <span className="w-10 h-10 bg-gradient-to-t from-slate-400 to-slate-100 rounded-full  flex items-center justify-center">
            {menuIcon}
          </span>
          {showOptions && <ShowPortal />}
        </div>
      )}
    </Link>
  );
};

export default LinkProperty;
