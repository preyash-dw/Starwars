import React, {useEffect} from "react";
import {RxCross2} from "react-icons/rx"
import Star from "../images/star.png";
const SideBar = ({sec,movieClicked,handleClick,name}) => {
  useEffect(() => {
    // Whenever "sec" or "movieClicked" changes, this effect will run
    console.log('SideBar updated:', sec, movieClicked);
  }, [sec, movieClicked]);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
          borderBottom: "2px solid gray",
          color: "white",
          fontFamily: "Poppins",
          fontSize: "20px",
        }}
      >
        <span>{name} Details</span>
        <span>
          <RxCross2 onClick={() => handleClick(false)} />
        </span>
      </div>
      <div style={{ padding: "20px", borderBottom: "2px solid gray" }}>
        <img
          src={Star}
          alt="Details"
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <p style={{ color: "white", marginTop: "3px", fontFamily: "cursive" }}>
          {Object.keys(sec)[0]}
        </p>
        <p
          style={{
            color: "gray",
            width: "100%",
            padding: "5px",
            backgroundColor: "lightgray",
            borderRadius: "5px",
            marginTop: "3px",
          }}
        >
          {movieClicked.Name}
        </p>
        <p style={{ color: "white", marginTop: "3px", fontFamily: "cursive" }}>
          {Object.keys(sec)[1]}
        </p>
        <p
          style={{
            color: "gray",
            width: "100%",
            padding: "5px",
            backgroundColor: "lightgray",
            borderRadius: "5px",
            marginTop: "3px",
          }}
        >
          {movieClicked[Object.keys(sec)[1]]}
        </p>
        <p style={{ color: "white", marginTop: "3px", fontFamily: "cursive" }}>
          {Object.keys(sec)[2]}
        </p>
        <p
          style={{
            color: "gray",
            width: "100%",
            padding: "5px",
            backgroundColor: "lightgray",
            borderRadius: "5px",
            marginTop: "3px",
          }}
        >
          {movieClicked[Object.keys(sec)[2]]}
        </p>
        <p style={{ color: "white", marginTop: "3px", fontFamily: "cursive" }}>
          {Object.keys(sec)[3]}
        </p>
        <p
          style={{
            color: "gray",
            width: "100%",
            padding: "5px",
            backgroundColor: "lightgray",
            borderRadius: "5px",
            marginTop: "3px",
          }}
        >
          {movieClicked[Object.keys(sec)[3]]}
        </p>
        <p style={{ color: "white", marginTop: "3px", fontFamily: "cursive" }}>
          {Object.keys(sec)[4]}
        </p>
        <p
          style={{
            color: "gray",
            width: "100%",
            padding: "5px",
            backgroundColor: "lightgray",
            borderRadius: "5px",
            marginTop: "3px",
          }}
        >
          {movieClicked[Object.keys(sec)[4]]}
        </p>
      </div>
      <button
        onClick={() => handleClick(false)}
        style={{
          padding: "5px",
          backgroundColor: "lightred",
          marginLeft: "15%",
          width: "70%",
          marginBottom: "10px",
          borderRadius: "10px",
          fontSize: "15px",
          fontWeight: "800",
          color: "white",
        }}
      >
        Close
      </button>
    </div>
  );
};

export default SideBar;
