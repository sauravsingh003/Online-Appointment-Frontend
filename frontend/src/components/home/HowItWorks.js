// src/components/home/HowItWorks.js
import React from "react";
import "./HowItWorks.css"; // Assuming you have a CSS file for styling

const HowItWorks = () => (
  <section
    className="how-it-works bg-light py-5"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <div className="container text-center">
      <h2 className="mb-4">How It Works</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="step-card p-4">
            <div className="step-number mb-3">1</div>
            <h5>Sign Up / Login</h5>
            <p>Create an account or login as a patient or doctor.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="step-card p-4">
            <div className="step-number mb-3">2</div>
            <h5>Search Doctor</h5>
            <p>Browse available doctors and choose the right one for you.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="step-card p-4">
            <div className="step-number mb-3">3</div>
            <h5>Book Appointment</h5>
            <p>Pick a convenient date and time and confirm your appointment.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
