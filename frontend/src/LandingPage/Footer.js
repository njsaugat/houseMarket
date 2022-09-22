import React from 'react';
import Banner from '../components/Banner';
// import logo from '../logo.svg';

const getDate = () => {
  return new Date().getFullYear();
};
const usefulLinks = [
  {
    id: 1,
    name: 'Useful Link',
    links: ['Content', 'How', 'Create', 'Explore', 'Teams'],
  },
  {
    id: 2,
    name: 'Community',
    links: ['Help Center', 'Partners', 'Suggestions', 'Blog', 'Newsletters'],
  },
  {
    id: 3,
    name: 'Partner',
    links: ['Our Partner', 'Become a partner'],
  },
];
const Footer = () => {
  const renderUsefulLinks = usefulLinks.map((usefulLink) => {
    return (
      <div className="category flex flex-col" key={usefulLink.id}>
        <h1 className="font-bold text-xl my-3  leading-tight md:leading-snug">
          {usefulLink.name}
        </h1>
        {usefulLink.links.map((link, index) => {
          return (
            <a
              className="no-underline my-1"
              href="h"
              key={index}
              xtarget="_blank"
              rel="noreferrer"
            >
              {link}
            </a>
          );
        })}
      </div>
    );
  });
  return (
    <div className="p-10 md:p-20 pt-5 bg-black text-white">
      <div className="flex flex-col md:flex-row ">
        <div className="left flex flex-col justify-center items-center w-full md:w-2/5 my-10">
          <Banner />
          <span className="text-gray-400 mt-10">
            A new way to purchase the
            <br />
            your dream house.
          </span>
        </div>
        <div className="right item flex justify-center  w-full md:w-3/5 gap-10 md:gap-x-32">
          {renderUsefulLinks}
        </div>
      </div>
      <div className=" bg-gray-500  mx-10 h-0.5 my-5"></div>
      <span className="py- text-gray-400 flex justify-center items-center">
        Copyright © {getDate()} HooBank. All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
