import React, { useState, useEffect } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

import Backimg1 from "/img/SLIDE 1.jpg";
import Backimg2 from "/img/SLIDE 2.jpg";
import Backimg3 from "/img/SLIDE 3.jpg";
import Backimg4 from "/img/SLIDE 4.jpg";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Collaborate with <span> freelancers </span>
            <br />
            Embrace <span> spiritual entrepreneurship</span>
          </h1>
          {/* <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "building mobile app"'
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

       
      </div>
    </div>
  );
}

export default Featured;