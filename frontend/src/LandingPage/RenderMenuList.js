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

export default RenderMenuList;
