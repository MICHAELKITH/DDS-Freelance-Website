import React from 'react';

import Backimg1 from '/img/design1.jpeg';

const design = () => (
  <div className="about-page">
    <div className="culture">
      <p>Divisions</p>
      <h1>Design</h1>
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

export default design;
