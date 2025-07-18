import React from "react";
import "../styles/UrbanSection.css";

function UrbanRanchSection() {
  return (
    <div className="urban-ranch-section">
      <div className="container">
        <div className="ranch-content-wrapper">
          <div className="ranch-text">
            <div className="title-container c3-tittle mb-2">
              <h2 className="Title">Welcome to Urban Ranch</h2>
            </div>
            <h3 className="section-heading text-dark">
              Ranch Life = Refined Living
            </h3>
            <p className="section-description">
              Welcome to IRA Urban Ranch — Set in Kongarakalan, near Adibatla, this 17-acre gated villa community is crafted for families seeking luxury, privacy, and soul-deep connection.
            </p>
          </div>
          <div className="image-wrapper">
            <img
              src="https://urbanranch.irarealty.in/_next/static/media/c3.f3268189.webp"
              alt="IRA Urban Ranch"
              className="ranch-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UrbanRanchSection;
