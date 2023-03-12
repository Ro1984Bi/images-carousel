import React, { useState } from "react";
import "../css/Carrousel.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Carrousel({ data }) {
  const [slides, setSlides] = useState(0);

  const nextSlide = () => {
    setSlides(slides === data.length - 1 ? 0 : slides + 1)
  }

  const previousSlide = () => {
    setSlides(slides === 0 ? data.length - 1 : slides - 1)
  }
  return (
    <div className="carrousel">
      <AiOutlineArrowLeft className="arrow arrow-left" onClick={previousSlide} />
      {data.map((item, index) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={index}
            className={slides === index ? "slides" : "slides slides-hidden"}
          />
        );
      })}
      <AiOutlineArrowRight className="arrow arrow-right" onClick={nextSlide} />
      <span className="indicators">
        {data.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setSlides(index)}
              className={
                slides === index ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}

export default Carrousel;
