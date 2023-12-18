import React from 'react';
import Backimg1 from '/img/design1.jpeg';
import Backimg2 from '/img/DMUSIC.jpg';
import Backimg3 from '/img/MARKETING1.jpg';
import Backimg4 from '/img/Technology.jpeg';
import Backimg5 from '/img/clothing.jpeg';

import './division.scss';

const division = () => (
  <div className="about-page">
    <div className="culture">
      {/* <p>About Us</p> */}
      <h1>Divisions</h1>
    </div>

    <div className="about-culture">
      <p>
        We are called Divine Design Studio, which also stands for DDS. As
        Creative Design Studio, we are a collaborative group of freelancers
      </p>
      <img src={Backimg1} alt="Our image " />
    </div>
    <div className="about-sect">
      <div className="overview">
        <div>
          <h2>Overview</h2>
          <h3>Divine Design Studio Network</h3>
        </div>
        <div className="banner">
          <img src={Backimg2} alt="" />
          <p>
            A Brief Outlook The Divine Design Studio Network stands as a
            beacon of creativity and innovation, fostering a collaborative
            environment where artistic visionaries come together to bring
            dreams to life.
            {' '}
            <span>
              This unique network seamlessly integrates various creative
              disciplines, uniting artists, designers, and professionals under
              a shared mission of pushing the boundaries of aesthetic
              excellence.
              {' '}
            </span>
          </p>
        </div>
      </div>
      <hr />
      <div className="overview">
        <div>
          {/* <h2>Who We Are</h2> */}
          <h3>Collaborative Ecosystem</h3>
        </div>
        <div className="banner">
          <img src={Backimg3} alt="" />
          <p>
            At the core of the Divine Design Studio Network is a collaborative
            ecosystem that thrives on the synergy of diverse talents. Artists
            and designers from various backgrounds converge to share ideas,
            pool resources, and embark on collaborative projects that
            transcend the conventional boundaries of individual disciplines.
          </p>
        </div>
      </div>
      <hr />
      <div className="overview">
        <div>
          {/* <h2>Image 3</h2> */}
          <h3> Multidisciplinary Excellence</h3>
        </div>
        <div className="banner">
          <img src={Backimg4} alt="" />
          <p>
            Diversity is celebrated within the Divine Design Studio Network,
            where excellence knows no singular form. From graphic designers
            and architects to writers and multimedia artists, the network
            embraces a myriad of creative expressions. This multidisciplinary
            approach not only encourages cross-pollination of ideas but also
            results in projects that are rich in depth and innovation.
          </p>
        </div>
      </div>
      <hr />
      <div className="overview">
        <div>
          {/* <h2>Image 4</h2> */}
          <h3>Innovative Projects and Initiative</h3>
        </div>
        <div className="banner">
          <img src={Backimg5} alt="" />
          <p>
            The Divine Design Studio Network serves as a launchpad for
            innovative projects and initiatives that push the envelope of
            creative expression. Whether it's a cutting-edge design concept, a
            multimedia art installation, or a collaborative event, the network
            provides a platform for members to showcase their talents and
            contribute to the collective advancement of the arts
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default division;
