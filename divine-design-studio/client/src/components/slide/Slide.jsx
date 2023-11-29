import React from 'react';
import './Slide.scss';
import Slider from 'infinite-react-carousel';

const Slide = ({ children, slidesToShow, arrowsScroll }) => (

  <>
    <div className="slide">
      <div className="container">
        <p className="topics">Our Industries </p>
        <div className="slide1">
          <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
            {children}
          </Slider>

        </div>

      </div>
    </div>

  </>

);

export default Slide;
