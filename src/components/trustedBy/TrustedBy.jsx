import React from 'react';
import './TrustedBy.scss';
import icon from '../../../../../../../../img/Ellipse 4.png';

const TrustedBy = () => (
  <div className="trustedBy">
    <div className="container">
      <div className="img-dot">
        <li>
          <img src={icon} alt="" />
          {' '}
          Innovative
          {' '}
        </li>
        <li>
          <img src={icon} alt="" />
          {' '}
          Faith Driven
          {' '}
        </li>
        <li>
          {' '}
          <img src={icon} alt="" />
          Result-Driven
          {' '}
        </li>
        <li className="active">
          {' '}
          <img src={icon} alt="" />
          Creativity
        </li>
      </div>
    </div>
  </div>
);

export default TrustedBy;
