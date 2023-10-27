import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
  
<>
<div className="slide">
      <div className="container">
      <p className="topics">Our Industries </p>
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>

</>

   
  
  );
};

export default Slide;
