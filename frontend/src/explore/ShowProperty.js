import React, { useEffect, useState } from 'react';
import Navbar from '../LandingPage/Navbar';
import house from '../house.png';
import { Link, useLocation, useParams } from 'react-router-dom';
import Footer from '../LandingPage/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Loading from '../components/Loading';
const viewsIcon = <FontAwesomeIcon icon={faEye} />;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function getPropertyAttributes(property) {
  document.title =
    property.name.charAt(0).toUpperCase() + property.name.slice(1);
  const { location, furnished, bedRoom, livingRoom, bathRoom } = property;
  const email = property.owner.email;
  let propertyAttributes = {
    location,
    furnished: furnished === true ? 'Yes' : 'No',
    bedRoom,
    livingRoom,
    bathRoom,
    email,
  };
  return propertyAttributes;
}
const ShowProperty = () => {
  const { state } = useLocation();
  // const property = state;
  console.log('state is', state);
  const params = useParams();
  console.log(params.id);
  const [property, setProperty] = useState(() => (state ? state : {}));

  // console.log(property);
  const [propertyAttributes, setPropertyAttributes] = useState(() =>
    state ? getPropertyAttributes(state) : {}
  );
  const [isLoading, setLoading] = useState(() => (state ? false : true));
  // let propertyAttributes;
  // if(state){
  //   // const prop=state
  //   propertyAttributes=getPropertyAttributes(property)

  // }
  // console.log(property);

  useEffect(() => {
    async function getProperties() {
      console.log('/property/' + params.id);
      const data = await fetch('/property/' + params.id, {
        method: 'GET',
      });
      const propertiesData = await data.json();
      console.log(propertiesData);
      setProperty(propertiesData);
      setLoading(false);
      setPropertyAttributes(getPropertyAttributes(propertiesData));
    }

    if (!state) {
      getProperties();
      // propertyAttributes=getPropertyAttributes(property);
    }
  }, [state, params.id]);
  const RenderPropertyAttributes = () => {
    return (
      <div className="attributes leading-8 md:leading-10 mt-5 bg-gradient-to-r rounded-lg p-5 from-sky-200 to-cyan-50 w-10/12 md:w-11/12 lg:w-3/5 self-center md:self-start mx-5 ">
        {Object.entries(propertyAttributes).map(([key, value]) => {
          return (
            <div key={key} className="flex gap-x-20 md:gap-x-28 lg:gap-x-48  ">
              <span className="capitalize w-20">{key}</span>
              <span>{propertyAttributes[key]}</span>
            </div>
          );
        })}
      </div>
    );
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <div className=" bg-gradient-to-t from-slate-50 to-cyan-50 flex flex-col md:flex-row w-screen md:h-screen  bg-slate-50   ">
        <div className="left m-5 w-full md:w-1/3   mb-10 md:mb-1 flex flex-col ">
          <img
            className="w-11/12 md:w-full hover:scale-105 transition-transform  rounded-xl"
            src={
              'http://127.0.0.1:5000/' +
              property.imageUrl.substring(property.imageUrl.indexOf('photo'))
            }
            alt="property"
            loading="lazy"
          />
          <div className="  text-l flex flex-col gap-y-5 justify-between items-center">
            <Link to={`/user/${property.owner.id}`} state={property.owner}>
              <div className="nameGenerator w-16 h-16 rounded-full bg-gradient-to-t from-sky-400 to-cyan-100 capitalize  flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                <span className="text-5xl text-white mt-2">
                  {property.owner.name.charAt(0)}
                </span>
              </div>
            </Link>
            <Link to={`/user/${property.owner.id}`} state={property.owner}>
              <span className="text-xl font-bold   hover:scale-105 transition-all duration-300">
                {property.owner.name}
              </span>
            </Link>
            <span className="tracking-wide">
              {viewsIcon} {getRandomNumber()} views
            </span>
          </div>
        </div>

        <div className="right  w-full md:w-2/3 flex flex-col  mb-20 md:mb-0">
          <h1 className="font-bold mx-5 text-2xl md:text-3xl my-10 tracking-wide capitalize">
            {property.name}
          </h1>
          <span className="price  font-bold text-xl mx-5 mb-5 tracking-wide">
            ?????? {numberWithCommas(property.price)}
          </span>
          <p className="description mx-5">{property.description}</p>

          <RenderPropertyAttributes />
          <div className="mx-5 md:w-1/2 md:mt-5 flex flex-col mb-10 md:mb-16 items-center justify-center">
            <div className="py-2 px-5 mt-10 mx-5 flex justify-center items-center w-36 rounded-lg bg-gradient-to-t from-slate-200 to-cyan-100  tracking-wide text-black shadow-lg text-2xl ">
              For {property.propertyType === 'Rent' ? 'Rent' : 'Sale'}
            </div>
            <div className="h-16  w-3 bg-gradient-to-b from-slate-200 to-cyan-100 shadow-lg"></div>
            <div className="w-1/2 h-1 bg-slate-400"></div>
          </div>
          <div className="mx-5">
            {/* find other properties posted by Pouded */}
            <span className="">Find other properties posted by </span>
            <Link
              className="font-bold hover:tracking-wide "
              to={`/user/${property.owner.id}`}
            >
              {property.owner.name}
            </Link>
          </div>
        </div>
      </div>
      {/* add similar products type of stuff */}
      <Footer />
    </>
  );
};

export default ShowProperty;
