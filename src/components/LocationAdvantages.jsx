import React from "react";
import "../styles/LocationAdvantages.css";

function LocationAdvantages() {
  return (
    <section className="location-section">
      <div className="location-container">
        <div className="location-image">
          <img
            src="https://urbanranch.irarealty.in/_next/static/media/ladesktop.5ce3d769.webp"
            alt="Urban Ranch Map"
          />
        </div>
        <div className="location-content">
          <span className="location-tag fw-semibold">Location Advantages</span>
          <h2 className="location-title desktop-title">
            Close to What Matters. <br /> Away From What Doesn’t.
          </h2>
          <h2 className="location-title mobile-title">
            Close to What Matters Away From What Doesn't
          </h2>
          <ul className="location-points">
            <li>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
              </svg>
              <span className="time">
                10-15 mins to
              </span>
              <span className="companies">
              TCS, Tata Aerospace, Adibatla SEZ
              </span>
            </li>

            <li>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
              </svg>
              <span className="time">15-20 mins to</span>
              <span className="companies">
              Delhi Public School, Aga Khan Academy
              </span>
            </li>

            <li>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
              </svg>
              <span className="time">10-15 mins to </span>
              <span className="companies"> Wonderla & upcoming World Trade Center</span>
             
            </li>

            <li>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
              </svg>
              <span className="time">25 mins to</span>
             <span className="companies">RGI Airport & ORR Exit 13</span> 
            </li>
          </ul>

          <button className="location-btn">Why Adibatla?</button>
        </div>
      </div>
    </section>
  );
}

export default LocationAdvantages;
