import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
// import house from '../house.png';
import Navbar from '../LandingPage/Navbar';
import ShowPage from './ShowPage';
import { Link } from 'react-router-dom';

const LETTERS_MAX_LENGTH = 100;
const buttonProperty = `py-2 px-5 my-10 rounded-lg bg-gradient-to-t from-sky-400 to-cyan-100  tracking-wide text-black shadow-lg cursor-pointer`;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const PROPERTIES_PER_PAGE = 1;

const getPropertiesPerPage = (totalProperties) =>
  totalProperties / PROPERTIES_PER_PAGE;

const getArrayofPages = (totalPages) => {
  return Array.from(Array(totalPages).keys());
};

const Explore = () => {
  const [properties, setProperties] = useState([{}]);
  const [isLoading, setLoading] = useState(true);

  const [pagingationArr, setPaginationArr] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);

  function returnIndexRange(index) {
    return (
      index < selectedPage * PROPERTIES_PER_PAGE &&
      index >= (selectedPage - 1) * PROPERTIES_PER_PAGE
    );
  }
  useEffect(() => {
    async function getProperties() {
      const data = await fetch('/properties');
      const propertiesData = await data.json();
      console.log(propertiesData);
      setProperties(propertiesData);
      setLoading(false);

      const totalPages = getPropertiesPerPage(propertiesData.length);
      setPaginationArr(getArrayofPages(totalPages));
    }
    getProperties();
  }, []);

  if (isLoading) {
    // return navigate('/loading');
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <div className="properties w-screen h-screen bg-slate-100 flex flex-col  items-center transition-all">
        {properties.map((property, index) => {
          return (
            returnIndexRange(index) && (
              <div
                className="property flex  bg-slate-50 m-5 p-8 gap-4 w-11/12 md:w-3/5 lg:w-2/5 rounded-xl shadow-lg hover:shadow-xl hover:bg-white transition-shadow  duration-300 "
                key={property.id}
              >
                <div className="image w-1/3">
                  <img
                    className="rounded-3xl object-cover opacity-95  w-full h-full  "
                    src={
                      'http://127.0.0.1:5000/' +
                      property.imageUrl.substring(
                        property.imageUrl.indexOf('photo')
                      )
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
                    {property.description.substring(0, LETTERS_MAX_LENGTH) +
                      '...'}
                  </p>
                  <div className="attributes flex items-center gap-5 gap-x-20 ">
                    <span className="price text-lg font-bold">
                      रु {numberWithCommas(property.price)}
                    </span>
                    <span className="type">{property.propertyType}</span>
                  </div>
                  {/* <div className="location text-slate-500 text-sm mt-1">
                    {' '}
                    {property.location}
                  </div> */}
                  <hr className="my-3" />
                  <div className="owner mt-2">{property.location}</div>
                </div>
              </div>
            )
          );
        })}
        <div className="pagination  bg-slate-100 flex gap-6 items-center">
          <span
            className={`prev  ${buttonProperty}`}
            onClick={() => {
              if (selectedPage === 1) {
                return setSelectedPage(pagingationArr.length);
              }
              setSelectedPage((prevPage) => prevPage - 1);
            }}
          >
            Prev
          </span>
          {pagingationArr.map((page, index) => {
            return (
              // <Link to={`/page/${index + 1}`}>
              // </Link>
              <ShowPage
                page={page}
                index={index}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            );
          })}
          <span
            className={`next  ${buttonProperty}`}
            onClick={() => {
              if (selectedPage === pagingationArr.length) {
                return setSelectedPage(1);
              }
              setSelectedPage((prevPage) => prevPage + 1);
            }}
          >
            Next
          </span>
        </div>
      </div>
    </>
  );
};

export default Explore;
