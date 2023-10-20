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
  const [image, setImage] = useState(1);

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((prevImage) => (prevImage >= 4 ? 1 : prevImage + 1));
    }, 10000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="featured">
      <div className="container">
        {/* <img
            src={image === 1 ? Backimg1 : image === 2 ? Backimg2 : image === 3 ? Backimg3 : Backimg4}
            alt={`Image ${image}`}
          /> */}
        {/* <img src= {Backimg} alt="" /> */}
        {/* <div className="background-images">
          <img
            src={
              image === 1
                ? Backimg1
                : image === 2
                ? Backimg2
                : image === 3
                ? Backimg3
                : Backimg4
            }
            alt={`Image ${image}`}
            style={{ width: "100%", height: "auto" }}
          />
        </div> */}
         {/* <div className="right">
          <img
            src={
              image === 1
                ? Backimg1
                : image === 2
                ? Backimg2
                : image === 3
                ? Backimg3
                : Backimg4
            }
            alt={`Image ${image}`}
            style={{width: "55%"}}
          />
        </div> */}
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
