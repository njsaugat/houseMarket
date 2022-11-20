import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import LinkProperty from '../components/LinkProperty';
import Loading from '../components/Loading';
import Footer from '../LandingPage/Footer';
import Navbar from '../LandingPage/Navbar';
const ShowUser = () => {
  document.title = 'GharShar | User';

  // const { state } = useLocation();
  // const userData = state;
  //userData could already be recieved-> no need to fetch
  const [user, setUser] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    async function getUser() {
      console.log('/user/' + params.id);
      const data = await fetch('/user/' + params.id);
      const userData = await data.json();
      setUser(userData);
      setLoading(false);
    }

    getUser();
  }, [params.id]);
  console.log(user);
  if (loading) {
    return <Loading />;
  }
  // we should also fetch the user's properties
  // so prolly not follow this approach?!
  return (
    <>
      <Navbar />
      <div className="w-screen  bg-gradient-to-t from-slate-300 to-slate-50 flex flex-col md:flex-row">
        <div className="left m-5 w-full md:w-1/3   mb-10 md:mb-1 flex flex-col  items-center ">
          <div className="nameGenerator w-32 h-32 rounded-full bg-gradient-to-t from-sky-400 to-cyan-100 capitalize  flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300">
            <span className="text-7xl text-white mt-2">
              {user.name.charAt(0)}
            </span>
          </div>
          <h1 className="font-bold mx-5 text-2xl md:text-3xl my-10 tracking-wide capitalize  hover:scale-105 transition-all duration-300">
            {user.name}
          </h1>
          <span className="price  font-bold text-xl mx-5 mb-5 tracking-wide">
            {user.properties.length} properties listed
          </span>
          <p className="description mx-5">{user.email}</p>
        </div>
        <div className="right  w-full md:w-2/3 flex flex-col lg:flex-row flex-wrap justify-center mb-20">
          {/* <span className="m-5">Listed Properties:</span> */}
          {user.properties.map((property) => {
            return (
              <LinkProperty
                property={property}
                smallDisplay={true}
                user={user}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShowUser;
