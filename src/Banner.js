import React from "react";
import bannerImage from " src/images/banner2.jpg ";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="Banner" className="banner-image" />
    </div>
  );
};

export default Banner;
