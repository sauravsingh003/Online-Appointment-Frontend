// src/components/home/ServicesSection.js
import React from "react";
import "./ServicesSection.css"; // Assuming you have a CSS file for styles

const ServicesSection = () => (
  <section className="services py-5" data-aos="fade-up" data-aos-delay="100">
    <div className="container text-center">
      <h2 className="mb-4">Our Services</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="service-card p-4 shadow-sm rounded">
            <div className="service-icon mb-3">🩺</div>
            <h5>Consult with Specialists</h5>
            <p>
              Find experienced doctors from various specialties for your health
              needs.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card p-4 shadow-sm rounded">
            <div className="service-icon mb-3">📅</div>
            <h5>Easy Appointment Booking</h5>
            <p>
              Schedule your visit effortlessly with just a few clicks on our
              platform.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card p-4 shadow-sm rounded">
            <div className="service-icon mb-3">⏰</div>
            <h5>24/7 Support</h5>
            <p>Get assistance anytime with our dedicated support team.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
