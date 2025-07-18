import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "floor-plans", "amenities", "contact-us"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    window.history.pushState(null, "", `#${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="navbar-wrapper-mobile py-3 px-3 px-lg-5">

      <div className="d-lg-none navbar-mobile-top">

        <div></div>
        {!isMobileMenuOpen && (
          <button
            className="btn fs-3 text-white navbar-mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Open menu"
          >
            &#9776;
          </button>
        )}
      </div>
      {isMobileMenuOpen && (
        <div className="navbar-mobile-overlay">
          <button
            className="btn close-button"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
          <nav className="navbar-mobile-links">
            {["home", "floor-plans", "amenities", "contact-us"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`nav-link ${activeSection === section ? "text-warning" : "text-light"}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(section);
                }}
              >
                {section.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </a>
            ))}
          </nav>
        </div>
      )}

      <div className="d-none d-lg-flex navbar-desktop-wrapper">
        <div className="navbar-desktop-container">
          <img
            src="https://urbanranch.irarealty.in/_next/static/media/urlogodesktop.28cffa17.webp"
            alt="Desktop Logo"
            width="104"
            height="54"
            className="img-fluid"
          />
          <nav className="navbar-desktop-links">
            {["home", "floor-plans", "amenities", "contact-us"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`nav-link fw-medium ${activeSection === section ? "text-warning active-desktop-link" : "text-light"}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(section);
                }}
              >
                {section.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;



