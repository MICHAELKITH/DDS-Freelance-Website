import React from 'react';
import Backimg1 from '../../../../../../../../img/30324.jpg';
import Backimg2 from '../../../../../../../../img/SLIDE 1_edited.jpg';
import Backimg4 from '../../../../../../../../img/excel.webp';
import Backimg5 from '../../../../../../../../img/collab.avif';
import Backimg6 from '../../../../../../../../img/innovative.avif';
import Backimg7 from '../../../../../../../../img/development.avif';
import Backimg8 from '../../../../../../../../img/ethical.webp';
import Backimg9 from '../../../../../../../../img/global.avif';
import Backimg10 from '../../../../../../../../img/community.avif';

import './spiritual.scss';

const about = () => (
  <div className="about-page">
    <div className="culture">
      <h1>Spiritual Entrepreneurship</h1>
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

export default about;
