import React from "react";
import "../css/About.css";

import necklace from "../../assets/necklace.jpg";
import bracelet from "../../assets/bracelet.jpg";
import earrings from "../../assets/earrings.jpg";
import rings from "../../assets/rings.jpg";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <h1>
          About <span className="brand-name">Your Charms</span>
        </h1>
        <p className="tagline">Timeless Elegance for Every Woman</p>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <section className="about-story">
          <h2>Our Story</h2>
          <p>
            At <strong>Your Charms</strong>, we believe that accessories are
            more than adornments — they are expressions of your personality.
            Each piece in our collection is chosen to celebrate{" "}
            <strong>individuality, elegance, and confidence</strong>.
          </p>
          <p>
            We combine <strong>timeless design</strong> with{" "}
            <strong>modern style</strong> to create pieces that make you feel
            radiant, empowered, and uniquely yourself. Every item reflects our
            passion for quality, beauty, and sophistication.
          </p>
          <p>
            Discover <strong>Your Charms</strong> — where every accessory tells
            a story and lets your true self shine.
          </p>
        </section>
      </section>

      {/* Product Gallery */}
      <section className="about-gallery">
        <div className="about-img p1">
          <img src={necklace} alt="Necklace" />
          <p>Necklaces</p>
        </div>
        <div className="about-img p2">
          <img src={bracelet} alt="Bracelet" />
          <p>Bracelets</p>
        </div>
        <div className="about-img p1">
          <img src={earrings} alt="Earrings" />
          <p>Earrings</p>
        </div>
        <div className="about-img p2">
          <img src={rings} alt="Rings" />
          <p>Rings</p>
        </div>
        <div className="about-img more-card p1">
          <p>+ Many More</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <h2>Why Choose Us?</h2>
        <div className="why-cards">
          <div className="card">
            <span>✨</span>
            <p>Handpicked Quality</p>
          </div>
          <div className="card">
            <span>💎</span>
            <p>Unique Designs</p>
          </div>
          <div className="card">
            <span>💖</span>
            <p>Affordable Luxury</p>
          </div>
          <div className="card">
            <span>🛍️</span>
            <p>Exceptional Support</p>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="about-footer">
        <p>
         Be bold. Be you. Shine with <strong>Your Charms</strong>. 
        </p>
        <button
          className="shop-now-btn"
          onClick={() => (window.location.href = "/explore")}
        >
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default About;
