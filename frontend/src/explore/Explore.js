import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
// import house from '../house.png';
import Navbar from '../LandingPage/Navbar';
import ShowPage from './ShowPage';
import { Link } from 'react-router-dom';
import LinkProperty from '../components/LinkProperty';
import Footer from '../LandingPage/Footer';

const LETTERS_MAX_LENGTH = 100;
const buttonProperty = `py-2 px-5 my-10 rounded-lg bg-gradient-to-t from-sky-400 to-cyan-100  tracking-wide text-black shadow-lg cursor-pointer`;

const PROPERTIES_PER_PAGE = 1;

const getPropertiesPerPage = (totalProperties) =>
  totalProperties / PROPERTIES_PER_PAGE;

const getArrayofPages = (totalPages) => {
  return Array.from(Array(totalPages).keys());
};

const Explore = () => {
  document.title = 'GharShar | Explore';

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
      <div className="properties w-screen h-screen bg-slate-100 flex flex-col  items-center transition-all ">
        {properties.map((property, index) => {
          return (
            returnIndexRange(index) && <LinkProperty property={property} />
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
      <Footer />
    </>
  );
};

export default Explore;
