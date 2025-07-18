import React from "react";
import "../styles/Testimonials.css";

function Testimonials() {
  const reviews = [
    {
      quote: "Felt Right Instantly",
      text: "We moved from overseas and found not just a home, but a community. Our kids have friends. We have peace.",
      initials: "PA",
      name: "Priya & Arjun",
      role: "NRI Investors",
      bgColor: "#6dbb34",
    },
    {
      quote: "Perfect Blend of Life",
      text: "Urban Ranch was love at first sight. Where else do you find the luxury of a serene green space close to Adibatla TCS?",
      initials: "K",
      name: "Kiran Reddy",
      role: "Tech Entrepreneur",
      bgColor: "#ffa726",
    },
    {
      quote: "Luxury with a Heart",
      text: "A combination of a sleek design and rooted lifestyle was what we were looking for. Urban Ranch gave us that exactly!",
      initials: "MS",
      name: "Meera & Sanjay",
      role: "Business Owners",
      bgColor: "#2196f3",
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonial-inner">
        <p className="section-tag">Customer Testimonials</p>
        <h2 className="section-title text-dark">
          Built with Heart. Backed by Trust.
        </h2>
        <div className="testimonial-cards">
          {reviews.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote-icon">❝</div>
              <h3 className="Testimonals-heading">{item.quote}</h3>
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-footer">
                <div className="avatar"
                  style={{ backgroundColor: item.bgColor }}>
                  {item.initials}
                </div>
                <div className="user-info">
                  <strong>{item.name}</strong>
                  <p className="item-role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;



