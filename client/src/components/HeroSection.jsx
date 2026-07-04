import React from "react";
import img1 from "../assets/bgImage1-BgVBBcls.jpg";
import img2 from "../assets/bgImage2-CSvQeVNX.jpg";
import img3 from "../assets/bgImage3-BTY6Sz_K.jpg";
import img4 from "../assets/bgImage4-L1QELaMd.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="carousel w-full h-[500px] relative">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} alt="Slide 1" className="w-full object-cover" />

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} alt="Slide 2" className="w-full object-cover" />

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} alt="Slide 3" className="w-full object-cover" />

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} alt="Slide 4" className="w-full object-cover" />

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div className="absolute top-30 left-1/2 transform -translate-x-1/2 ">
          <p className="text-6xl font-bold text-center mt-4 text-white">
            Your Favorite Food, Delivered Fast
          </p>
          <p className="text-xl text-center text-white mt-2">
            Order from thousands of restaurants and get it delivered to your
            doorstep
          </p>

          <div className="flex justify-center mt-4">
            <a
              href="/login"
              className="bg-(--primary) text-white px-7 py-2 rounded-md mr-4 hover:bg-(--primary-hover) transition text-lg font-semibold"
            >
              Sign Up
            </a>
            <a
              href="/register"
              className="bg-(--primary-text) text-natural px-5 py-2 rounded-md hover:bg-(--secondary-hover) transition text-lg font-semibold"
            >
              Order Now
            </a>
          </div>
          {/* make search bar */}
          <div className="ml-4 p-5"></div>
          <input
            type="text"
            placeholder="Search for restaurants or dishes"
            className="px-4 py-2 bg-(--background) w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:border-(--primary)"
          />
        </div>
      </div>
    </>
  );
};  

export default HeroSection;
