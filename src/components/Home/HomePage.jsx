import React from "react";
import "../css/Homepage.css";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";

const HomePage = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <h1>Elevate Your Style!</h1>
          <p>
            Discover timeless accessories that define your charm, from elegant
            rings to dazzling bracelets. Explore beauty in every detail, crafted
            for the modern you.
          </p>

          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>

          <button
            className="shop-btn"
            onClick={() => (window.location.href = "/explore-items")}
          >
            Shop Now
          </button>
        </div>

        <div className="hero-images">
          <img src={p1 || "/placeholder.svg"} alt="Accessory 1" className="photo p1" />
          <img src={p2 || "/placeholder.svg"} alt="Accessory 2" className="photo p2" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;