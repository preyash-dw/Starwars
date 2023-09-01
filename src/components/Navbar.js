import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useLocation } from 'react-router-dom'; // Import the useLocation hook
import Logo from "../images/Logo.png";

const Navbar = ({update}) => {
  const location = useLocation();

  const isMoviesPage = location.pathname === '/movies';

  return (
    <div className="navbar"> 
      <div className="leftStyle"> 
        <div>
          <img src={Logo} alt="Logo" className="logoStyle" /> 
        </div>
      </div>
      <div className="rightStyle"> 
        {isMoviesPage && ( 
          <div className="searchIconStyle"> 
            <AiOutlineSearch className="iconStyle" /> 
            <input
              type="text"
              placeholder="Search"
              className="inputStyle"
              onChange={(e)=>update(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
