import React from 'react'
import Star from "../images/star.png";
const Home = () => {
  return (
    <div className='main'>
       <div className="centeredBox">
      <img src={Star} alt="Star Wras" style={{ width:"100%", height:"200px",objectFit:"cover",borderRadius:"10px"}} />
      <h2 style={{backgroundColor:"white"}}>Welcome to Star Wars</h2>
      <h2 style={{backgroundColor:"white"}}>Dashboard</h2>
      <p style={{backgroundColor:"white",fontSize:"13px"}}>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
    </div>
    </div>
  )
}

export default Home
