import React from "react";
import "../styles/GallerySection.css";

function GallerySection() {
  return (
    <div className="gallery-section">
      <img
        src="https://urbanranch.irarealty.in/_next/static/media/Vector.faabbda7.webp"
        alt="Decoration"
        className="vector-left"
      />
      <img
        src="https://urbanranch.irarealty.in/_next/static/media/Vector.faabbda7.webp"
        alt="Decoration"
        className="vector-right"
      />
      <div className="container">
        <div className="gallery-inner">
          <h3 className="gallery-title">Gallery</h3>
          <div className="gallery-grid">
            <div className="gallery-col">
              <img
                src="https://urbanranch.irarealty.in/_next/static/media/c4.d24ed6bc.webp"
                alt="Gallery Image 1"
                className="gallery-img large"
              />
              <img
                src="https://urbanranch.irarealty.in/_next/static/media/C8.05574929.webp"
                alt="Gallery Image 2"
                className="gallery-img small mt"
              />
            </div>

            <div className="gallery-row">
              <img
                src="https://urbanranch.irarealty.in/_next/static/media/image5.60e42198.webp"
                alt="Gallery Image 3"
                className="gallery-img wide"
              />
            </div>
            <div className="gallery-col">
              <img
                src="https://urbanranch.irarealty.in/_next/static/media/c7.4801623d.webp"
                alt="Gallery Image 4"
                className="gallery-img medium"
              />
              <img
                src="https://urbanranch.irarealty.in/_next/static/media/c2.b80108fc.webp"
                alt="Gallery Image 5"
                className="gallery-img small mt"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;