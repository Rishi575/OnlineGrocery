import React, { useState } from 'react';


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1 }
   
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-slide">
        <div className="carousel-content">
          {slides[currentSlide].content}
        </div>
      </div>
      <button onClick={prevSlide} className="carousel-button prev">Previous</button>
      <button onClick={nextSlide} className="carousel-button next">Next</button>
    </div>
  );
};

export default Carousel;
