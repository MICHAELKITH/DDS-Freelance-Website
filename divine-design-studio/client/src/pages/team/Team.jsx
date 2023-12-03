import React from 'react';
import Backimg from '/img/philip.jpg';
import Backimg0 from '/img/mike.jpg';
import Backimg1 from '/img/gloria.jpg';
import Backimg2 from '/img/david.jpg';
import Backimg3 from '/img/noble 3.jpg';
import Backimg4 from '/img/godwin.jpg';
import './team.scss';

const team = () => (
  <div className="team">
    <div className="intro">
      <h1>Meet the Team</h1>
    </div>

    <div className="container">
      <div className="people">
        <ul className="people-images">
          <li className="image-container">
            <img src={Backimg1} alt="Image 1" />
            <div className="text-overlay">
              <p>
                Gloria Namuyomba - Uganda
                {' '}
                <br />
                <span>Assistant Music Studio Manager</span>
              </p>
            </div>
          </li>
          <li className="image-container">
            <img src={Backimg} alt="Image 1" />
            <div className="text-overlay">
              <p>
                Philip Dodoo- Ghana
                {' '}
                <br />
                <span>Creative Design Manager</span>
              </p>
            </div>
          </li>
          <li className="image-container">
            <img src={Backimg0} alt="Image 1" />
            <div className="text-overlay">
              <p>
                Michael Kithinji - Kenya
                {' '}
                <br />
                <span>Technology Development Manager</span>
              </p>
            </div>
          </li>
          <li className="image-container">
            <img src={Backimg4} alt="Image 1" />
            <div className="text-overlay">
              <p>
                Adebayo Godwin Wealth - Nigeria
                {' '}
                <br />
                <span>Fashion Design Manager</span>
              </p>
            </div>
          </li>
          <li className="image-container">
            <img src={Backimg2} alt="Image 1" />
            <div className="text-overlay">
              <p>
                Ssenfuma David - Uganda
                {' '}
                <br />
                <span>Music Studio Manager</span>
              </p>
            </div>
          </li>
          <li className="image-container">
            <img src={Backimg3} alt="Image 1" />
            <div className="text-overlay">
              <p>
                Noble Selorm Dzreh - Ghana
                {' '}
                <br />
                <span>Organizational Training Director</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="news-list">
        <div className="filter-list">
          <h2>Divisions</h2>
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
        </div>
      </div>
    </div>
  </div>
);

export default team;
