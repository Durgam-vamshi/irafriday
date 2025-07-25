import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="mobile-res">
              <div>
                <img
                  src="https://urbanranch.irarealty.in/_next/static/media/urflogomobile.88c02773.webp"
                  alt="Urban Ranch Logo"
                  className="footer-logo"
                />

                <div className="footer-partners">
                  <img
                    src="https://urbanranch.irarealty.in/_next/static/media/logofmobile.6f3922a8.webp"
                    alt="IRA"
                    className="ira-Img"
                  />
                  <img
                    src="https://urbanranch.irarealty.in/_next/static/media/ihlogomobile.111736a5.webp"
                    alt="IronHorse"
                    className="ira-Img2"
                  />


                </div>
              </div>
              <hr />
              <div className="footer-top-right">
                <div className=" mobile-cta">
                  <h5 className="footer-salesheading">Talk to our sales expert</h5>
                  <button className="sales-btn">Click Here</button>
                </div>

                <div className="footer-address address-container mobile">
                  <h4 className="Address">Address:</h4>
                  <i className="fas fa-map-marker-alt"></i>

                  4-49/2, Besides Anvaya Conventions Road, Financial District,
                  Vattinagulapally, Hyderabad - 500 032, Telangana
                </div>


                <div className="contact-item phone-container">
                  <h4>Phone:</h4>
                  <i className="fas fa-phone-alt"></i>+91 9121 777 777
                </div>

                <div className="contact-item email-container">
                  <h4>Email:</h4>
                  <i className="fas fa-envelope"></i> info@irarealty.in
                </div>



                <div className="footer-social-mobile socialMedia-container">
                  <h5>Social Media</h5>
                  <ul>
                    <li>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#">Whatsapp</a>
                    </li>
                  </ul>
                </div>



              </div>
            </div>
            <div className="footer-links links-mobile">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#floor-plans">Floor Plans</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="/privacy-policy" target="_blank" rel="noreferrer">
                    Privacy Policy
                  </a>
                </li>
              </ul>
              <p className="footer-disclaimer">
                This is purely a conceptual presentation and not a legal
                offering. The promoters reserve the right to make changes in
                elevation, specifications, and plans as deemed fit.
              </p>
              <div className="footer-bottom">
                <p>©2025 IRAREALTY</p>
              </div>
            </div>

            <div className="footer-desktop">
              <div className="footer-address desktop">
                <i className="fas fa-map-marker-alt"></i>
                4-49/2, Besides Anvaya Conventions Road, Financial District,
                Vattinagulapally, Hyderabad - 500 032, Telangana
              </div>

              <div className="footer-contact-info">
                <div className="contact-item">
                  <i className="fas fa-phone-alt"></i> +91 9121 777 777
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i> info@irarealty.in
                </div>
              </div>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-columns">
              <div className="footer-links">
                <h5>Quick Links</h5>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#floor-plans">Floor Plans</a>
                  </li>
                  <li>
                    <a href="#contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/privacy-policy" target="_blank" rel="noreferrer">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-social ">
                <h5>Social Media</h5>
                
                <ul className="Sociallinks">
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#">Whatsapp</a>
                  </li>
                </ul>



              </div>


















              <div className="footer-cta">
                <h5>Talk to our sales expert</h5>
                <button className="sales-btn">Click Here</button>
              </div>
            </div>
            <p className="footer-disclaimer">
              This is purely a conceptual presentation and not a legal offering.
              The promoters reserve the right to make changes in elevation,
              specifications, and plans as deemed fit.
            </p>
          </div>
        </div>

        <div className="footer-bottom footer-bottom-desktop">
          <p>©2025 IRAREALTY</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
