import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/communityAmenities.css";
import { Pagination } from "swiper/modules";

function CommunityAmenities() {
  return (
    <div className="amenities-section">
      <div className="container amenities-container">
        <div className="amenities-content">
          <div className="left-section">
            <div className="section-label text-white">
              Community &amp; Amenities
            </div>
            <h2 className="section-heading">
              A Lifestyle that Breathes <br /> and Belongs
            </h2>
            <div className="subsection">
              <h5 className="sub-heading">Social & Community Spaces</h5>
              <ul>
                <li>Grand Clubhouse, Banquet Hall, Guest Suites</li>
                <li>Party Lawns, Amphitheater, Café‑style seating</li>
              </ul>
            </div>
          </div>
          <div className="right-section">
            <Swiper
              modules={[Pagination]}
              spaceBetween={60}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="swiper-container"
            >
              <SwiperSlide>
                <img
                  src="https://urbanranch.irarealty.in/_next/static/media/c1.57a705b5.webp"
                  alt="Nature & Wellness"
                  className="slide-image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://urbanranch.irarealty.in/_next/static/media/c1.57a705b5.webp"
                  alt="Sports & Active Living"
                  className="slide-image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://urbanranch.irarealty.in/_next/static/media/c1.57a705b5.webp"
                  alt="Social & Community Spaces"
                  className="slide-image"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityAmenities;
