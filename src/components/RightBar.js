import React, { useState,useEffect } from "react";
import Star from "../images/star.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { PiGridFourFill } from "react-icons/pi";

import SideBar from "./SideBar";
import DropDown from "./DropDown";

const RightBar = ({ movies, name ,search }) => {
  const [clicked, setClicked] = useState(false);
  const [sideclick,setSideClick]=useState(false);
  const [movieClicked,setMovieClicked]=useState(null);
  const [sec, setSec] = useState({});
  const [openDropdownId, setOpenDropdownId] = useState(null);


  const openDropdown = (id) => {
    setOpenDropdownId(id);
  };

  const closeDropdown = () => {
    setOpenDropdownId(null);
  };

  const handleClick = (data) => {
    setSideClick(true);
    setMovieClicked(data);
  }
  
  const handleSetClick=(data)=>{
    setSideClick(data);
  }

  useEffect(() => {
    if (movies.length > 0) {
      setSec(movies[0]);
    }
  }, [movies]);

  let filteredMovies = movies; 

  if (search && search.trim() !== "") {
    
    filteredMovies = movies.filter(
      (data) =>
        data.Name.toLowerCase().includes(search.toLowerCase())
    );
  }



  return (
    <div className="rightMain">
      <div className="grid">
        <div className="name">
          <h2>{name}</h2>
        </div>
        <div className="toggle">
          <button onClick={() => setClicked(false)}>
            <PiGridFourFill size={20} />
            <span>Grid</span>
          </button>
          <button onClick={() => setClicked(true)}>
            <HiOutlineMenu size={20} />
            <span>List</span>
          </button>
        </div>
      </div>

      {clicked ? (
        <div>
           <div className="barTop">
        <span style={{backgroundColor:"rgba(72, 74, 109, 0.030)"}}>{Object.keys(sec)[0]}</span>
        <span style={{backgroundColor:"rgba(72, 74, 109, 0.030)"}}>{Object.keys(sec)[1]}</span>
        <span style={{backgroundColor:"rgba(72, 74, 109, 0.030)"}}>{Object.keys(sec)[2]}</span>
        <span style={{backgroundColor:"rgba(72, 74, 109, 0.030)"}}></span>
      </div>
          {filteredMovies.map((data, index) => (
            <div>
              <div className="bar" onClick={()=>handleClick(data)}>
                <div className="first">
                  <span>
                    {React.cloneElement(data.icon, { size: 30 })}
                  </span>
                 <span style={{marginLeft:"5px"}}> {data.Name}</span>
                </div>
                <div className="second">{data[Object.keys(data)[1]]}</div>
                <div className="third">{data[Object.keys(data)[2]]}</div>
                <div className="four" style={{justifyContent:"flex-end"}}>
                  <span style={{marginLeft:"80%"}}><BsThreeDotsVertical /></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="box">
          {filteredMovies.map((data,index) => (
            <div className="rightBoxMain">
              <div className="rightBoxImage" >
                <img src={Star}  alt="star wars" className="mainImg" onClick={()=>handleClick(data)}/>
              </div>
              <div className="down">
                <div className="left">
                    {/* {React.cloneElement(data.icon, { size: 30,})} */}
                    {data.icon}
                  <span
                    style={{
                      backgroundColor: " rgba(72, 74, 109, 0.010)",
                      fontSize: "15px",
                      fontFamily: "cursive",
                      marginLeft:"4px"
                    }}
                  >
                    {data.Name}
                  </span>
                </div>
                <div
                  style={{
                    backgroundColor: "gray",
                    padding: "4px",
                    borderRadius: "4px",
                  }}
                >
                  <BsThreeDotsVertical
                    size={20}
                    style={{ backgroundColor: "gray", marginTop: "2px" }}
                    onClick={() =>
                      openDropdown(index === openDropdownId ? null : index)
                    }
                  />
                  {openDropdownId === index && (
                <div className="dropdown-container">
                  <DropDown  handleSide={handleSetClick} handleCloseDropdown={closeDropdown}/>
                </div>
              )}
                </div>
                
              </div>
            </div>
          ))}
        </div>
      )}

      {sideclick && movieClicked&&(
        <div className="sidebar">
          <SideBar sec={sec} movieClicked={movieClicked} name={name} handleClick={handleClick}/>
        </div>
      )}
    </div>
  );
};

export default RightBar;

