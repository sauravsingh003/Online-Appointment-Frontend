import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedDoctors.css";
import doctors from "../../data/doctors"; 

const FeaturedDoctors = () => (
  <section className="featured-doctors py-5 mb-5" data-aos="fade-up">
    <div className="container text-center">
      <h2 className="mb-10">Our Trusted Doctors</h2>
      <div className="row g-4 justify-content-center">
        {doctors.map(({ id, name, specialty, image, tagline }) => (
          <div key={id} className="col-md-4">
            <div className="doctor-card">
              <img src={image} alt={name} />
              <h5>{name}</h5>
              <p className="specialty">{specialty}</p>
              <p className="tagline">{tagline}</p>
              <Link to={`/doctors/${id}`} className="explore-btn">Explore</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedDoctors;
