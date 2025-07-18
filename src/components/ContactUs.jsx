import React from "react";
import "../styles/ContactUs.css";

function ContactUs() {
  return (
    <section className="contact-section" id="contact-us">
      <div className="contact-wrapper">
        <div className="contact-image">
          <img
            src="https://urbanranch.irarealty.in/_next/static/media/c6.a2cd09fc.webp"
            alt="Contact Visual"
            className="contact-img"
          />
        </div>

        <div className="contact-container">
          <h2 className="contactus-title">Ready to Make a Move?</h2>
          <p className="contactus-sub">
            Choose the villa lifestyle that blends luxury with legacy.
          </p>
          <form className="contactus-form">
            <div className="input-row">
              <input
                type="text"
                placeholder="Name"
                required
                className="contactus-input"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="contactus-input"
              />
            </div>

            <div className="input-row input-row-mobile-wrap">
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="contactus-input half-width-mobile"
              />
              <input
                type="text"
                placeholder="Select Date"
                required
                className="contactus-input full-width-mobile"
              />
            </div>

            <div className="checkbox-container">
              <label htmlFor="authorization" className="contactus-label custom-checkbox">
                <input
                  type="checkbox"
                  id="authorization"
                  className="contactus-checkbox"
                />
                <span className="checkmark"></span>
                I authorize representatives of Urban Ranch to Call, SMS, Email
                or WhatsApp me about its products and offers. This consent
                overrides any registration for DNC/NDNC.
              </label>
            </div>


            <div className="btn-group">
              <button
                type="submit"
                className="contactus-btn primary show-desktop"
              >
                Schedule your site visit
              </button>
              <button
                type="submit"
                className="contactus-btn primary show-mobile"
              >
                Book a Visit
              </button>

              <button type="button" className="contactus-btn secondary">
                Download Floor Plans
              </button>
            </div>



          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
