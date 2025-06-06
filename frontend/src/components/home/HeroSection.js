// src/components/home/HeroSection.js
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => (
  <section className="hero-wrapper py-5 px-3">
    <div className="container hero-container">
      <div className="row align-items-center g-0">
        <div className="col-md-6 content-left">
          <h1 className="display-5 fw-bold">
            Book Appointment
            <br />
            With Trusted Doctors
          </h1>
          <p className="lead mt-3">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
          <Link to="/book" className="btn btn-light mt-3 px-4 py-2 fw-semibold">
            Book appointment →
          </Link>
        </div>
        <div className="col-md-6 text-center">
          <img src="/images/heroImg2.png" alt="Doctors" className="hero-img" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
