import React from 'react';
import Backimg1 from '/img/30324.jpg';

import './work.scss';

const work = () => (
  <div className="about-page">
    <div className="culture">
      <h1>Our Work</h1>
    </div>

    <div className="about-culture">
      <p>
        We are called Divine Design Studio, which also stands for DDS. As
        Creative Design Studio, we are a collaborative group of freelancers
      </p>
      <img src={Backimg1} alt="Our image " />
    </div>
  </div>
);

export default work;