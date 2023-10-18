import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";
import Backimg from "/img/WEBBACKDROP.jpg"
function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        {/* <img src={Backimg} alt=""
        
        
        
        
        /> */}
        <div className="left">
          <h1>
            Collaborate with <span> freelancers </span><br /> 
            Embrace <span> spiritual entrepreneurship</span> 
          </h1>
          {/* <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "building mobil app"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div> */}
          <div className="popular">
            <span>Popular:</span>
            <button>Technology</button>
            <button>Music</button>
            <button>Clothing</button>
            <button>Graphic Design</button>
            <button>Marketing</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
