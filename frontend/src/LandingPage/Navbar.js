import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCoins,
  faHouse,
  faListCheck,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Banner from '../components/Banner';

const menuIcon = <FontAwesomeIcon icon={faBars} />;
const crossIco = <FontAwesomeIcon icon={faXmark} />;

const homeIcon = <FontAwesomeIcon icon={faHouse} />;
const aboutUsIcon = <FontAwesomeIcon icon={faUser} />;
const featuresIcon = <FontAwesomeIcon icon={faListCheck} />;
const solutionIcon = <FontAwesomeIcon icon={faCoins} />;

const menuIcons = [homeIcon, aboutUsIcon, featuresIcon, solutionIcon];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const RenderMenuList = ({ icons }) => {
    return (
      <>
        <a href="# " target="_blank" rel="noreferrer" className="list-none">
          {icons && icons[0]} Home
        </a>
        <a href="# " target="_blank" rel="noreferrer" className="list-none">
          {icons && icons[3]} Explore
        </a>
        <a href="# " target="_blank" rel="noreferrer" className="list-none">
          {icons && icons[2]} Offers
        </a>
        <a href="# " target="_blank" rel="noreferrer" className="list-none">
          {icons && icons[1]} About Us
        </a>
      </>
    );
  };

  const ShowPortal = () => {
    return createPortal(
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-100 bg-gradient-to-b from-slate-900 to-gray-100  bg-opacity-95 overflow-y-hidden
      w-11/12 h-screen text-white  transition ease-in-out delay-400"
      >
        <div className="absolute    flex justify-between w-11/12 h-screen z-100    text-2xl  p-10 ">
          <div className="lists flex flex-col gap-10">
            <RenderMenuList icons={menuIcons} />
          </div>
          <span
            onClick={() => setShowMenu(false)}
            className="cursor-pointer rounded-lg  p-2 bg-gradient-to-b from-gray-600 to-black-50 w-10 h-10 flex justify-center items-center"
          >
            {crossIcon}
          </span>
        </div>
      </div>,
      document.getElementById('portal')
    );
  };
  return (
    <nav className="flex  items-center space-x-2 px-10 md:px-20 w-screen gap-10 md:gap-32 lg:gap-1  relative navbar ">
      <Banner />
      <div
        className="lg:hidden absolute right-10  text-3xl cursor-pointer rounded-lg  p-2 bg-gradient-to-b from-gray-600 to-black-50"
        onClick={() => {
          setShowMenu(true);
        }}
      >
        {menuIcon}
      </div>
      {showMenu && <ShowPortal />}
      <ul
        className={`hidden absolute -right-1/4 lg:flex lg:gap-10  md:w-11/12 lg:w-3/5 text-xl  items-center my-3`}
      >
        <RenderMenuList />
      </ul>
    </nav>
  );
};

export default Navbar;
