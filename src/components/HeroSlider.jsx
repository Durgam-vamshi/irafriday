import React, { useRef, useState } from "react";
import "../styles/HeroSlider.css";
import Navbar from "./Navbar";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
function HeroSlider() {
  const [selectedDate, setSelectedDate] = useState(null);


  const datePickerRef = useRef(null);
  const openDatePicker = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  return (
    <div className="hero-section">
      <Navbar />
      <div className="content-container">
        <img
          src="https://urbanranch.irarealty.in/_next/static/media/urhmobile.b0919f50.webp"
          alt="Mobile Logo"
          width="104"
          height="54"
          className="img-fluid1"
        />
        <div className="left-content">


          {/* Desktop View H1 */}
          <h1 className="hero-heading desktop-heading">
            4BHK Gated<br />
            Villa Community in<br />
            Adibatla
          </h1>

          {/* Mobile View H1 */}
          <h1 className="hero-heading mobile-heading">
            4BHK<br />
            GATED VILLA<br />
            COMMUNITY IN<br />
            ADIBATLA
          </h1>

          <p className="descript-hero">Experience 19.5 acres of gated community living
            at <br /> Urban Ranch</p>
          <div className="btn-container">
            <button
              className="btn fw-bold px-4 py-2 intro_btn"
              style={{
                color: "#f7c04a",
                backgroundColor: "white",
                borderWidth: "1px",
                borderColor: "#f7c04a",
              }}
            >
              Download Brochure
            </button>
          </div>

          <div className="partners">
            <img
              src="https://urbanranch.irarealty.in/_next/static/media/logodesktop.91d50d06.webp"
              alt="Partner 1"
              className="partner-left"
            />
            <img
              src="https://urbanranch.irarealty.in/_next/static/media/irlogodesktop.fc9d9f16.webp"
              alt="Partner 2"
              className="partner-right"
            />
          </div>
        </div>


        <div className="form-card">
          <h2 className="unlock-tag">Unlock Early Access</h2>
          <form>
            <div className="form-group name-mobile-group">
              <input type="text" name="name" placeholder="Name" required />
              <input type="tel" name="mobile" placeholder="Mobile Number" required />
            </div>

            <div className="date-picker-wrapper">
              <DatePicker
                ref={datePickerRef}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="Select date"
                className="full-width"
                dateFormat="dd/MM/yyyy"
              />
              <FaCalendarAlt className="calendar-icon" onClick={openDatePicker} />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email ID"
              className="full-width"
              required
            />
            <button type="submit">Book a visit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;


