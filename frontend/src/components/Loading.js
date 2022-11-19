import React, { useEffect, useState } from 'react';
import Footer from '../LandingPage/Footer';
import Navbar from '../LandingPage/Navbar';
import Loads from './Loads';

const Loading = () => {
  // const [Loading, setLoading] = useState(<Loads />);
  // const ShowLoading = () => {
  //   return (
  //     <>
  //       <Navbar />
  //       <Loads />
  //       <Footer />
  //     </>
  //   );
  // };
  // setTimeout(() => {
  //   return <ShowLoading />;
  // }, 2000);

  // useEffect(() => {
  //   setTimeout(setLoading(<ShowLoading />), 2000);
  // }, []);
  // return Loading;

  return (
    <>
      <Navbar />
      <Loads />
      <Footer />
    </>
  );
  // return (

  // );
};

export default Loading;
