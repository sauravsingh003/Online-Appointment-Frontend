import React from "react";
import "./FeaturedDoctors.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Aditi Sharma",
    specialty: "Cardiologist",
    image: "../images/doc1.jpg",
    tagline: "20+ Years Experience",
  },
  {
    id: 2,
    name: "Dr. Rajesh Verma",
    specialty: "Dermatologist",
    image: "../images/doc2.jpg",
    tagline: "Top Skin Specialist",
  },
  {
    id: 3,
    name: "Dr. Neha Singh",
    specialty: "Pediatrician",
    image: "../images/doc3.jpg",
    tagline: "Child Care Expert",
  },
];

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
              <button className="explore-btn">Explore</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedDoctors;
