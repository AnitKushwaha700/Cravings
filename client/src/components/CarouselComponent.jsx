import React, { useState, useEffect, useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { createPortal } from "react-dom";
import bgImage1 from "../assets/carousel/bgImage1.jpg";
import bgImage2 from "../assets/carousel/bgImage2.jpg";
import bgImage3 from "../assets/carousel/bgImage3.jpg";
import bgImage4 from "../assets/carousel/bgImage4.jpg";

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const wrapperRef = useRef(null);
  const buttonPortalRef = useRef(null);

  const images = [bgImage1, bgImage2, bgImage3, bgImage4];

  // Auto-rotate carousel
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [autoPlay, images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setAutoPlay(false);
  };

  useEffect(() => {
    if (!wrapperRef.current) return;

    const portal = document.createElement("div");
    portal.style.position = "absolute";
    portal.style.inset = "0";
    portal.style.pointerEvents = "none";
    portal.style.zIndex = "20";

    const parent = wrapperRef.current.parentElement;
    if (parent) {
      parent.insertBefore(portal, wrapperRef.current.nextSibling);
      buttonPortalRef.current = portal;
    }

    return () => {
      if (buttonPortalRef.current?.parentElement) {
        buttonPortalRef.current.parentElement.removeChild(buttonPortalRef.current);
      }
    };
  }, []);

  const renderButtons = () => (
    <div className="absolute inset-0 pointer-events-none">
      <button
        onClick={prevSlide}
        className="pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <IoChevronBack size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="pointer-events-auto absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition backdrop-blur-sm"
        aria-label="Next slide"
      >
        <IoChevronForward size={24} />
      </button>
    </div>
  );

  return (
    <div
      ref={wrapperRef}
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Carousel Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {buttonPortalRef.current
        ? createPortal(renderButtons(), buttonPortalRef.current)
        : renderButtons()}
    </div>
  );
};

export default CarouselComponent;