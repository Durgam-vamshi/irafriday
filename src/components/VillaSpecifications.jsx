import React from "react";
import "../styles/VillaSpecifications.css";

function VillaSpecifications() {
  return (
    <section className="villa-specs-section" id="villa-specs">
      <div className="container">
        <div className="villa-specs-wrapper">
          <div className="villa-specs-left">
            <h4 className="section-label">Villa Specifications</h4>

            <h2 className="villa-title">
              <span className="title-line villa-title-sub desktop-line">
                Designed for Comfort, Built
              </span>
              <br className="desktop-line" />
              <span className="title-line villa-title-sub">with Intention</span>
            </h2>

            <p className="villa-desc">
              Searching for 4 BHK villas for sale in Hyderabad that feel
              spacious and soulful? Look no further.
            </p>

            <div className="specs-grid">
              {[
                {
                  icon: "https://urbanranch.irarealty.in/_next/static/media/area.989c3363.png",
                  label: "Area",
                  value: "17 acres",
                },
                {
                  icon: "https://urbanranch.irarealty.in/_next/static/media/location.ba63ef4a.png",
                  label: "Location",
                  value: "Kongarakalan",
                },
                {
                  icon: "https://urbanranch.irarealty.in/_next/static/media/type.6be31bb4.png",
                  label: "Type",
                  value: "4BHK Villas",
                },
                {
                  icon: "https://urbanranch.irarealty.in/_next/static/media/totalvillas.48a5c6e1.png",
                  label: "Total villas",
                  value: "163",
                },
                {
                  icon: "https://urbanranch.irarealty.in/_next/static/media/plotarea.95e6b94f.png",
                  label: "Plot area",
                  value: "298-351 Sq. Yds",
                },
                {
                  icon: "https://urbanranch.irarealty.in/_next/static/media/villaarea.d6456507.png",
                  label: "Villa area",
                  value: "3,718-4,711 Sq. Ft",
                },
                {
                  icon: "https://urbanranch.irarealty.in/_next/static/media/structure.5be20f76.png",
                  label: "Structure",
                  value: "G+2",
                },
                {
                  icon: "https://urbanranch.irarealty.in/_next/static/media/clubhouse.02205c61.png",
                  label: "Clubhouse",
                  value: "20500 SFT",
                },
              ].map((item, idx) => (
                <div className="spec-card" key={idx}>
                  <img
                    src={item.icon}
                    alt={`${item.label} icon`}
                    className="spec-icon"
                  />
                  <div className="spec-item">
                    <h6 className="spec-title">{item.label}</h6>
                    <p className="spec-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="villa-specs-right">
            <img
              src="https://urbanranch.irarealty.in/_next/static/media/c7.cd3dc491.webp"
              alt="Villa"
              className="villa-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VillaSpecifications;
