// src/components/home/TestimonialsSection.js
import React from "react";
import "./TestimonialsSection.css"; // Assuming you have a CSS file for styling

const testimonials = [
  {
    id: 1,
    quote: "Booking an appointment was so easy, and the doctors were very professional.",
    author: "Priya S.",
  },
  {
    id: 2,
    quote: "I found the perfect specialist quickly and had a great consultation.",
    author: "Rahul M.",
  },
  {
    id: 3,
    quote: "Customer support was amazing and helped me reschedule with ease.",
    author: "Anjali K.",
  },
];

const TestimonialsSection = () => (
  <section className="testimonials py-5" data-aos="fade-up" data-aos-delay="300">
    <div className="container">
      <h2 className="text-center mb-4">What Our Patients Say</h2>
      <div className="row g-4 justify-content-center">
        {testimonials.map(({ id, quote, author }) => (
          <div key={id} className="col-md-4">
            <div className="testimonial-card p-4 shadow-sm rounded">
              <p>"{quote}"</p>
              <h6 className="mt-3">- {author}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
