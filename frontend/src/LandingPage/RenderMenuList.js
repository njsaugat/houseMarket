import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoggedInContext } from '../App';
import ShowPortal from '../components/ShowPortal';

// function getCookie(key) {
//   var b = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
//   return b ? b.pop() : '';
// }
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
const RenderMenuList = ({ icons }) => {
  console.log(getCookie('connect'));
  const [showOptions, setShowOptions] = useState(false);
  const { loggedIn } = useContext(LoggedInContext);

  if (!loggedIn) {
    return (
      <div className="lg:w-full lg:ml-52 flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-10  text-xl lg:text-lg">
        <Link to={'/explore'} rel="noreferrer" className="list-none">
          {icons && icons[3]} Explore
        </Link>
        <Link to={'/login'} rel="noreferrer" className="list-none">
          {icons && icons[1]} Log In
        </Link>
        <Link to={'/signup'} rel="noreferrer" className="list-none">
          {icons && icons[2]} Sign Up
        </Link>
      </div>
    );
  }

  return (
    <>
      <Link to={'/user/properties'} rel="noreferrer" className="list-none">
        {icons && icons[0]} Home
      </Link>
      <Link to={'/explore'} rel="noreferrer" className="list-none">
        {icons && icons[3]} Explore
      </Link>
      <Link to={'/register-property'} rel="noreferrer" className="list-none">
        {icons && icons[2]} Add Property
      </Link>
      <a href="# " rel="noreferrer" className="list-none">
        {icons && icons[1]} About Us
      </a>
      <div
        className="list-none cursor-pointer"
        onClick={(e) => {
          setShowOptions(true);
        }}
      >
        {icons && icons[1]} Log Out
      </div>
      {showOptions && (
        <ShowPortal
          showOptions={showOptions}
          // closeModal={() => setShowOptions(false)}
          setShowOptions={setShowOptions}
          // setOverflow={setOverflow}

          message={'Do you want to log out?'}
          logOut={true}
        />
      )}
    </>
  );
};

export default RenderMenuList;
