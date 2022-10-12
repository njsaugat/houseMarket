import React from 'react';
import Tagline from '../components/Tagline';
import house from '../house.png';
const Hero = () => {
  return (
    <main className="w-screen p-10 md:p-20 relative md:flex md:justify-between items-center overflow-hidden   mb-32  bg-gradient-to-r from-gray-200 to-gray-50 ">
      <div className="left  my-24 mb-10  md:w-3/5">
        <Tagline textSize={'9xl'} />
        <section className="description text-gray-400 md:w-1/2">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </section>
        <button className="py-3 px-5 my-10 bg-gradient-to-t from-cyan-500 to-cyan-100  rounded-lg text-black">
          Explore Now
        </button>
      </div>

      <div className="md:w-12">
        <img
          className="rounded-3xl object-cover opacity-95  w-full h-full  "
          src={house}
          alt=""
          srcSet=""
        />
      </div>
    </main>
  );
};

export default Hero;
