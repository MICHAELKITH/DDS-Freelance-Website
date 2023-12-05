import React from 'react';
import './Slide.scss';
import Slider from 'infinite-react-carousel';
import { useMediaQuery } from 'react-responsive';

const Slide = ({ children }) => {
  const isSmallDevice = useMediaQuery({ maxWidth: 768 }); // Define the maximum width for small devices

  // Determine the number of slides to show based on the device size
  const slidesToShow = isSmallDevice ? 1 : 3; // Change the number of slides for small devices

  return (
    <>
      <div className="slide">
        <div className="container">
          <p className="topics">Our Industries </p>
          <div className="slide1">
            <Slider slidesToShow={slidesToShow} arrowsScroll={1}>
              {children}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;
