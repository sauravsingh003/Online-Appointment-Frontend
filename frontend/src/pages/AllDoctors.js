import React from "react";
import { Link } from "react-router-dom";
import "./AllDoctors.css";

// Sample data (you can fetch from backend later)
const doctors = [
  {
    id: 1,
    name: "Dr. Aditi Sharma",
    specialty: "Cardiologist",
    image: "/images/doc1.jpg",
    tagline: "20+ Years Experience",
  },
  {
    id: 2,
    name: "Dr. Rajesh Verma",
    specialty: "Dermatologist",
    image: "/images/doc2.jpg",
    tagline: "Top Skin Specialist",
  },
  {
    id: 3,
    name: "Dr. Neha Singh",
    specialty: "Pediatrician",
    image: "/images/doc3.jpg",
    tagline: "Child Care Expert",
  },
  {
    id: 4,
    name: "Dr. Priya Desai",
    specialty: "Gynecologist",
    image: "/images/doc4.jpeg",
    tagline: "Women’s Health Expert",
  },
  {
    id: 5,
    name: "Dr. Kavita Mehta",
    specialty: "ENT Specialist",
    image: "/images/doc5.jpeg",
    tagline: "Ear, Nose & Throat Expert",
  },
  {
    id: 6,
    name: "Dr. Rohit Joshi",
    specialty: "General Physician",
    image: "/images/doc6.jpeg",
    tagline: "Primary Care Specialist",
  },
];


const AllDoctors = () => {
  return (
    <section className="all-doctors-page py-5">
      <div className="container text-center">
        <h2 className="mb-4">All Available Doctors</h2>
        <div className="row g-4 justify-content-center">
          {doctors.map(({ id, name, specialty, image, tagline }) => (
            <div key={id} className="col-md-4">
              <div className="doctor-card">
                <img src={image} alt={name} />
                <h5>{name}</h5>
                <p className="specialty">{specialty}</p>
                <p className="tagline">{tagline}</p>
                <Link to={`/doctors/${id}`}>
                  <button className="explore-btn">Explore</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllDoctors;
