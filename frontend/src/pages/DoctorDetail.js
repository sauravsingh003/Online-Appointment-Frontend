import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DoctorDetail.css";

// Temporary doctor data (this should ideally come from a backend or context)
const doctors = [
  {
    id: 1,
    name: "Dr. Aditi Sharma",
    specialty: "Cardiologist",
    tagline: "20+ Years Experience",
    description: "Dr. Aditi Sharma is a renowned cardiologist with over 20 years of experience treating complex heart conditions. She believes in a holistic approach to heart health and patient care.",
    image: "/images/doc1.jpg",
  },
  {
    id: 2,
    name: "Dr. Rajesh Verma",
    specialty: "Dermatologist",
    tagline: "Top Skin Specialist",
    description: "Dr. Rajesh Verma specializes in dermatology with a focus on skincare innovations and advanced treatments for chronic skin conditions.",
    image: "/images/doc2.jpg",
  },
  {
    id: 3,
    name: "Dr. Neha Singh",
    specialty: "Pediatrician",
    tagline: "Child Care Expert",
    description: "Dr. Neha Singh is a child care expert with over 10 years of experience treating infants and children with compassion and care.",
    image: "/images/doc3.jpg",
  },
  {
    id: 4,
    name: "Dr. Priya Desai",
    specialty: "Gynecologist",
    tagline: "Comprehensive Women’s Health",
    description: "Dr. Priya Menon is a trusted gynecologist known for her holistic approach to women’s reproductive health. She brings over 16 years of experience in handling complex gynecological issues.",
    image: "/images/doc4.jpeg",
  },
  {
    id: 5,
    name: "Dr. Kavita Mehta",
    specialty: "Orthopedic Surgeon",
    tagline: "Expert in Joint & Bone Health",
    description: "Dr. Kavita Mehta is a leading orthopedic surgeon specializing in joint replacements and sports injuries. With over 14 years of experience, he offers advanced treatments for faster recovery.",
    image: "/images/doc5.jpeg",
  },
  {
    id: 6,
    name: "Dr. Rohit Joshi",
    specialty: "General Physician",
    tagline: "Your First Point of Contact for Everyday Health",
    description: "Dr. Rohit Joshi is an experienced general physician dedicated to diagnosing and managing a wide range of health conditions. With a strong focus on preventive care and patient education, Dr. [Name] helps individuals maintain overall wellness and provides personalized treatment for common illnesses, chronic diseases, and lifestyle concerns.",
    image: "/images/doc6.jpeg",
  },
];

const DoctorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) return <div className="doctor-detail-wrapper">Doctor not found.</div>;

  return (
    <div className="doctor-detail-wrapper">
      <div className="doctor-detail-card">
        <img src={doctor.image} alt={doctor.name} className="doctor-detail-img" />

        <div className="doctor-detail-info">
          <h2>{doctor.name}</h2>
          <p className="specialty">🩺 {doctor.specialty}</p>
          <p className="tagline">⭐ {doctor.tagline}</p>
          <p>{doctor.description}</p>

          <ul style={{ paddingLeft: "1rem", marginBottom: "1rem", color: "#444" }}>
            <li>✅ Available for online consultation</li>
            <li>✅ Verified and experienced doctor</li>
            <li>✅ Highly rated by patients</li>
          </ul>

          <button className="back-btn" onClick={() => navigate(-1)}>← Back to Doctors</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
