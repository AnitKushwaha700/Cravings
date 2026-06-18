import React from "react";
import img1 from "../assets/bgImage1-BgVBBcls.jpg";
import img2 from "../assets/bgImage2-CSvQeVNX.jpg";
import img3 from "../assets/bgImage3-BTY6Sz_K.jpg";
import img4 from "../assets/bgImage4-L1QELaMd.jpg";

const HeroSection = () => {
  return (
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} alt="" className="w-full h-96 object-cover" />

        <div className="absolute left-5 right-5 top-1/2 flex justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} alt="" className="w-full h-96 object-cover" />

        <div className="absolute left-5 right-5 top-1/2 flex justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} alt="" className="w-full h-96 object-cover" />

        <div className="absolute left-5 right-5 top-1/2 flex justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} alt="" className="w-full h-96 object-cover" />

        <div className="absolute left-5 right-5 top-1/2 flex justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;