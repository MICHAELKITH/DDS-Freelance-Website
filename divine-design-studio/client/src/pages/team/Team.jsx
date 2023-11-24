import React from "react";
import Backimg4 from "/img/SLIDE 1.jpg";
import Backimg5 from "/img/SLIDE 2.jpg";
import Backimg6 from "/img/SLIDE 3.jpg";
import Backimg9 from "/img/SLIDE 4.jpg";
import "./team.scss";
const team = () => {
  return (
    <div className="team">
      <div className="intro">
        <h1>Meet the Team</h1>
      </div>

      <div className="container">
        <div className="people">
            <ul className="people-images">
                <li><img src={Backimg4} alt="" /></li>
                <li><img src={Backimg5}alt="" /></li>
                <li><img src={Backimg6} alt="" /></li>
                <li><img src={Backimg9} alt="" /></li>
                <li><img src={Backimg6} alt="" /></li>
                <li><img src={Backimg9} alt="" /></li>
                <li><img src={Backimg6} alt="" /></li>
                <li><img src={Backimg9} alt="" /></li>
                <li><img src={Backimg9} alt="" /></li>
            </ul>
        </div>
        <div className="news-list">
          <div className="filter-list">
            <h2>About</h2>
            <ul className="filter-category">
              <li>Who We Are</li>
              <li>Meet the Team</li>
              <li>Spiritual Entrepreneurship</li>
            </ul>
            <h2>Products</h2>
            <ul className="filter-category">
              <li>Clothing</li>
              <li>Music</li>
              <li>Design</li>

              <li>Technology</li>
              <li>Marketing</li>
            </ul>
            <h2>Services</h2>
            <ul className="filter-category">
              <li>Graphics & Design</li>
              <li>Video & Animation</li>
              <li>Digital Marketing</li>
              <li>Product Development</li>
              <li>Music & Audio</li>
              <li>Song Writing</li>
              <li>Programming & Tech</li>
              <li>Virtual Reality</li>
              <li>Fashion Design</li>
              <li>Media & Production</li>
            </ul>
            <h2>Become a Freelancer</h2>
            <ul className="filter-category">
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default team;
