import React from "react";
import "../styles/MasterPlan.css";

function MasterPlan() {
  return (
    <div className="master-plan-section">
      <div className="container">
        <div className="master-plan-wrapper p-4 rounded-4 bg-light">
          <div className="d-flex flex-row master-plan-con flex-lg-row g-5 align-items-start">
            <div className="col-lg-7 d-flex flex-column">
              <h3 className="mb-3  Heading">Master Plan</h3>

              <div className="download-button-container d-none d-lg-flex">
                <button className="download-button large desktop-large">Download Brochure</button>
              </div>

              <div className="d-flex align-items-center justify-content-center">
                <img
                  alt="Master plan image"
                  width="329"
                  height="239"
                  decoding="async"
                  data-nimg="1"
                  className="img-fluid align-self-center w-100"
                  src="https://urbanranch.irarealty.in/_next/static/media/mpdesktop.26e5b3f0.webp"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
            <div className="col-12 col-lg-5 rounded-4 py-3 mt-2">
              <div className="legend-container p-4">
                <h3 className="mb-4 fw-bold legend-heading Heading">Legend</h3>
                <div className="row">
                  {[
                    ["1.", "Entry/exit with security cabin", "13.", "Mini soccer"],
                    ["2.", "Primary street", "14.", "Outdoor gym"],
                    ["3.", "Pedestrian walkway", "15.", "Picnic Zone"],
                    ["4.", "Multipurpose lawn with stepped sitting", "16.", "Shade structure with yoga/meditation"],
                    ["5.", "Stage with feature wall", "17.", "Play lawn"],
                    ["6.", "Sunken seating with fire pit", "18.", "Half basketball court with seating gallery"],
                    ["7.", "Swimming pool", "19.", "Tennis court"],
                    ["8.", "Shade structure and lounge seating", "20.", "Feature wall with sculpture"],
                    ["9.", "Car parking", "21.", "Skating rink"],
                    ["10.", "Driveway", "22.", "Informal seating"],
                    ["11.", "Plaza", "23.", "Edible garden"],
                    ["12.", "Children's play area", "", ""],
                  ].map(([num1, text1, num2, text2], index) => (

                    <div className="row mb-2 legend-con" key={index}>
                      <div className="col-6 d-flex align-items-start legend-item">
                        <span className="me-2">{num1}</span>
                        <span>{text1}</span>
                      </div>

                      <div className="col-6 d-flex align-items-start legend-item">
                        <span className="me-2">{num2}</span>
                        <span>{text2}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="download-button-containers  mt-4">
                <button className=" download-button-larger below">Download Brochure</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MasterPlan;




















