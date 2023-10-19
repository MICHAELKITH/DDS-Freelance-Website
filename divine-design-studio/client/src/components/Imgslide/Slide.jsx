// Slide.jsx
import React, { useEffect, useState } from "react";
import "./Slide.scss";

function Slide({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="slide" style={{ backgroundImage: `url(${images[currentImage]})` }}>
      {/* You can add any additional content or controls for each slide here */}
    </div>
  );
}

export default Slide;
