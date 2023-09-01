import React, { useState } from "react";
import { AiFillFolder, AiOutlineRight, AiOutlineUp } from "react-icons/ai";
import { Link } from "react-router-dom";

const initialRoutes = [
  {
    path: "/movies",
    name: "Films",
    api:"films",
    clicked: false,
    icon:<AiFillFolder/>
  },
  {
    path: "/movies",
    name: "People",
    clicked: false,
    api:"people",
  },
  {
    path: "/movies",
    name: "Planets",
    clicked: false,
    api:"planets",
  },
  {
    path: "/movies",
    name: "Species",
    clicked: false,
    api:"species",
  },
  {
    path: "/movies",
    name: "Starships",
    clicked: false,
    api:"starships"
  },
  {
    path: "/movies",
    name: "Vehicles",
    clicked: false,
    api:"vehicles"
  },
];

const LeftBar = ({ movies, children ,updateApi,updateName}) => {
  const [routes, setRoutes] = useState(initialRoutes);
  const [lastClickedIdx, setLastClickedIdx] = useState(null);
 

  const toggle = (index, api,name) => {
    setRoutes((prevRoutes) => {
      const updatedRoutes = prevRoutes.map((route, i) =>
        i === index
          ? { ...route, clicked: !route.clicked }
          : { ...route, clicked: false }
      );
      return updatedRoutes;
    });
    setLastClickedIdx((prevIdx) => (prevIdx === index ? null : index));
    updateApi(api);
    updateName(name);
  };

  console.log("Movies State:", movies);

  return (
    <div className="main-container">
      <div className="leftBar">
        <section>
          {routes.map((route, index) => (
            <div key={route.name}  className={`link ${route.clicked && lastClickedIdx === index ? "leftBarActive" : ""}`} onClick={() => toggle(index, route.api,route.name)} >
              <div className={`mainElement ${route.clicked && lastClickedIdx === index ? "leftBarActive" : ""}`}>
              {/* <div className="left"> */}
              <Link to={route.path}  className={`links ${route.clicked && lastClickedIdx === index ? "leftBarActive" : ""}`}>
                <AiFillFolder  className={`file ${route.clicked && lastClickedIdx === index ? "leftBarActive" : ""}`} size={20} />
              </Link>
              <Link to={route.path}  className={`links ${route.clicked && lastClickedIdx === index ? "leftBarActive" : ""}`}>
                {route.name}
              </Link>
             
              <button className={`arrow ${route.clicked && lastClickedIdx === index ? "leftBarActive" : ""}`}>
                {route.clicked && lastClickedIdx === index ? (
                  <AiOutlineUp  className={`right ${route.clicked && lastClickedIdx === index ? "leftBarActive" : ""}`} size={15} />
                ) : (
                  <AiOutlineRight  className={`right ${route.clicked && lastClickedIdx === index ? "leftBarActive" : ""}`} size={15} />
                )}
              </button>
              </div>
              {route.clicked && lastClickedIdx === index &&  (
                <>
                <div className="dropElement">
                  <ul style={{maxHeight:"150px",overflowY:"auto"} } className="drop">
                    {movies.map((movie,index) => (
                      <div className="listdiv" >
                      <li key={index} style={{listStyle:"none",margin:"9px 0px", borderRadius:"5px",}} className="option">
                      
                      <div className="droplist">
                      <span>{movie.icon}</span>
                        <span>{movie.Name}</span>
                        <span style={{justifyContent:"flex-end"}}><AiOutlineRight/></span>
                      </div>
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
                </>
              )}
            </div>
            
          ))
          
          }
          
        </section>
      </div>
      <main style={{width:"80%",marginLeft:"20%"}}>{React.cloneElement(children, { movies })}</main>
    </div>
  );
};

export default LeftBar;
