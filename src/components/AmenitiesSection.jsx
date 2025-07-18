import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/AmenitiesSection.css";

function AmenitiesSection() {
  const imageData = [
    {
      src: "https://urbanranch.irarealty.in/_next/static/media/c1.57a705b5.webp",
      title: "Social & Community Spaces",
      features: [
        "Grand Clubhouse, Banquet Hall, Guest Suites",
        "Party Lawns, Amphitheater, Café‑style seating",
      ],
    },
    {
      src: "https://urbanranch.irarealty.in/_next/static/media/c1.57a705b5.webp",
      title: "Health & Wellness",
      features: ["Jogging Track, Meditation Zone", "Open Gym, Yoga Deck"],
    },
    {
      src: "https://urbanranch.irarealty.in/_next/static/media/c1.57a705b5.webp",
      title: "Leisure & Recreation",
      features: [
        "Swimming Pool, Kids' Play Area",
        "Indoor Games, Reading Lounge",
      ],
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="amenities-section text-white">
      <div className="container px-3">
        <div className="row d-flex align-items-center">

          <div className="col-lg-6 p-4">
            <span className="amenities-title mb-3">Community & Amenities</span>
            <h2 className="amenities-heading fw-bold mb-4">
              A Lifestyle that Breathes <br /> and Belongs
            </h2>

            <div className="amenities-category mb-3">
              <h5 className="category-title mb-2">
                {imageData[activeIndex].title}
              </h5>
              <ul className="category-list ps-3">
                {imageData[activeIndex].features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-6 swiper-wrapper-container">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={2.2}
              centeredSlides={false}
              loop={true}
              pagination={{ clickable: true }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="swiper-amenities"
            >
              {imageData.map((image, index) => (
                <SwiperSlide key={index} className="custom-slide">
                  <img
                    src={image.src}
                    alt={`Amenity Slide ${index + 1}`}
                    className="swiper-image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AmenitiesSection;
