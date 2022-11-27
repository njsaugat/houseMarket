import {
  faBusinessTime,
  faHouse,
  faHouseSignal,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';

const houseIcon = <FontAwesomeIcon icon={faHouse} />;
const businessIcon = <FontAwesomeIcon icon={faBusinessTime} />;
const smartHouseIcon = <FontAwesomeIcon icon={faHouseSignal} />;
const sellingFactors = [
  {
    id: 1,
    image: houseIcon,
    title: 'Find your Dream House',
    content:
      'Many ads for apartments and houses for sale in various locations. Tap your finger on the screen and then open your dream house from here ',
  },
  {
    id: 2,
    image: businessIcon,
    title: 'Find place of business',
    content:
      'Renting a place of business and buying and selling shop, houses becomes easier. Meet your business and investment needs faster',
  },
  {
    id: 3,
    image: smartHouseIcon,
    title: 'Smart Feature Rich',
    content:
      'Everything that you can manage and search through the ads is presentable through the app. With applications feature we can meet your needs ',
  },
];
const Business = () => {
  useEffect(() => {
    const contents = document.querySelectorAll('.content');
    console.log(contents);
    function showBox() {
      const triggerBottom = (window.innerHeight / 5) * 4; //we are setting the trigger point; as we enter here event should fire up
      contents.forEach((content) => {
        const boxTop = content.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          content.classList.add('show');
        }
      });
    }
    window.addEventListener('scroll', showBox);
    return () => window.removeEventListener('scroll', showBox);
  });
  const renderSellingFactors = sellingFactors.map((sellingFactor) => {
    let initialStyle =
      ' content py-5 rounded-md  flex items-center gap-5 w-10/12 my-10 md:mx-5 shadow-lg p-5';
    let computedStyle = 'bg-gradient-to-b from-gray-300 to-transparent-500';
    initialStyle += sellingFactor.id === 2 ? ' ' + computedStyle : '';
    // initialStyle += computedStyle  '';
    return (
      <div className={initialStyle} key={sellingFactor.id}>
        {/* <img
          className=" md:w-16 md:h-16"
          src={sellingFactor.image}
          alt=""
          srcSet=""
        /> */}

        <div className="text-3xl text-cyan-600">{sellingFactor.image}</div>
        <div className="factor flex flex-col ">
          <h2 className="font-bold text-xl mb-4">{sellingFactor.title}</h2>
          <div className="text-gray-400">{sellingFactor.content}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="md:flex w-full items-center p-10 md:p-20">
      <div className="left md:w-1/2 my-5">
        <h1 className="font-bold text-5xl my-5  leading-tight md:leading-snug">
          Provides the most complete list of property
        </h1>
        <span className="text-gray-400 w-1/2 leading-7">
          Find the ideal property that is most suitable for you. Starting from
          houses for sale that one minimalist apartments for sale that are
          exlusive.
        </span>
        <br />
        <button className="py-3 px-5 my-10 bg-gradient-to-t from-cyan-500 to-cyan-100  rounded-lg text-black">
          Get Started
        </button>
      </div>
      <div className="right md:w-1/3 md:ml-20 flex flex-col justify-center items-center">
        {renderSellingFactors}
      </div>
    </div>
  );
};

export default Business;
