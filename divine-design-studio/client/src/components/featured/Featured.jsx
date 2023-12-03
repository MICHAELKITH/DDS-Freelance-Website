import React, { useState } from 'react';
import './Featured.scss';
import { useNavigate } from 'react-router-dom';

function Featured() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Collaborate with
            {' '}
            <span> freelancers </span>
            <br />
            Embrace
            {' '}
            <span> spiritual entrepreneurship</span>
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='DDS" freelancing '
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button type="button" onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button type="button">Technology</button>
            <button type="button">Music</button>
            <button type="button">Clothing</button>
            <button type="button">Design</button>
            <button type="button">Marketing</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Featured;
