import React from "react";

function FiverrLogo({ fillColor }) {
  const textStyle = {
    color: fillColor,  // Use the fillColor prop for text color
    // Add more styles as needed
  };

  return (
    <p style={textStyle}>DDS</p>
  );
}

export default FiverrLogo;