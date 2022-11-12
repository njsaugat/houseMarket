import React, { useEffect, useState } from 'react';
import house from '../house.png';

const Explore = () => {
  const [properties, setProperties] = useState([{}]);
  useEffect(() => {
    async function getProperties() {
      const data = await fetch('/properties');
      const propertiesData = await data.json();
      console.log(propertiesData);
      setProperties(propertiesData);
    }
    getProperties();
  }, []);

  return (
    <div className="properties w-screen h-screen bg-slate-100 flex flex-col  items-center transition-all">
      <div className="property flex  bg-slate-50 m-10 p-8 gap-4 w-11/12 md:w-3/5 lg:w-2/5 rounded-xl shadow-lg hover:shadow-xl hover:bg-white transition-shadow  duration-300 ">
        <div className="image w-1/3">
          <img
            className="rounded-3xl object-cover opacity-95  w-full h-full  "
            src={house}
            alt=""
            srcSet=""
          />
        </div>
        <div className="h-full w-2/3">
          <h1 className="font-bold tracking-wide text-lg">Property Title</h1>
          <p className="text-slate-500 text-sm leading-4 my-3">
            Property Description -- only limited ...
          </p>
          <div className="attributes flex items-center gap-5 ">
            <span className="price text-lg font-bold"> रु 3699 </span>
            <span className="type">Property Type</span>
          </div>
          <div className="location text-slate-500 text-sm"> location</div>
          <hr />
          <div className="owner mt-2">Owner</div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
