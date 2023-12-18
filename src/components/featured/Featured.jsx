import React from "react";
import main from "/img/Group.png";
import icon from "/img/icon.png";

import consult from "/img/consult.png";
import "./Featured.scss";
const Featured = () => {
  return (
    <div className="featured">
      <div className="icon-images">
       
        <img src={icon}alt="" />
        <img src={icon}alt="" />
        <img src={icon}alt="" />
        <img src={icon}alt="" />
        <img src={icon}alt="" />
      </div>

      <div className="main-featured">
        <img src={main} alt="" />

        <div className="consult">
        <img src={consult} alt="" />
        </div>
      
      </div>
    </div>
  );
};

export default Featured;
