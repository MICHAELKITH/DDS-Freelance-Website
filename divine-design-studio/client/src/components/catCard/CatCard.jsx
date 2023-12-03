import React from 'react';
import { Link } from 'react-router-dom';
import './CatCard.scss';
// eslint-disable-next-line react/prop-types
function CatCard({ card }) {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={card.img} alt="" />
      </div>
    </Link>
  );
}

export default CatCard;
