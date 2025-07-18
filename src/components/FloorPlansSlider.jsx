import React, { useState } from "react";

const slides = [
  {
    img: "https://urbanranch.irarealty.in/_next/static/media/gfmobile.99eefb1c.webp",
    title: "Type-1",
    subtitle: "East Facing Villa",
    floor: "Ground Floor",
    area: "1523.32 SQ.FT",
  },
  {
    img: "https://urbanranch.irarealty.in/_next/static/media/ffmobile.364c936b.webp",
    title: "Type-2",
    subtitle: "East Facing Villa",
    floor: "First Floor",
    area: "1551.31 SQ.FT",
  },
];

function FloorPlansSlider() {
  const [reversed, setReversed] = useState(false);

  const toggleSlides = () => {
    setReversed((prev) => !prev);
  };

  const currentSlides = reversed ? [...slides].reverse() : slides;

  return (
    <>
      <div className="fp-controls">
        <button className="fp-arrow" onClick={toggleSlides}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="10"
            width="10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="fp-arrow" onClick={toggleSlides}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="10"
            width="10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <div className="fp-slider" style={{ display: "flex", gap: "0rem" }}>
        {currentSlides.map((slide, index) => (
          <div className="fp-card" key={index}>
            <img src={slide.img} alt={slide.floor} className="fp-img" />
            <div className="fp-info">
              <h3 className="villatype ">{slide.title}</h3>
              <h4 className="villaname">{slide.subtitle}</h4>
              <p className="floorname">{slide.floor}</p>
              <h4 className="builtuparea">
                Built-up Area:
                <br />
                <span>{slide.area}</span>
              </h4>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}
export default FloorPlansSlider;
