import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS
import './Home.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero d-flex align-items-center justify-content-center text-center text-white" data-aos="fade-in">
        <div className="overlay"></div>
        <div className="container position-relative">
          <h1 className="display-4 fw-bold mb-3">Your Health, Our Priority</h1>
          <p className="lead mb-4">
            Book appointments with trusted doctors anytime, anywhere.
          </p>
          <Link to="/book" className="btn btn-lg btn-primary">Book Appointment</Link>
        </div>
      </section>

      {/* Doctor Search Section */}
      <section className="search-doctor py-5" data-aos="fade-up">
        <div className="container text-center">
          <h2 className="mb-4">Find a Doctor</h2>
          <form className="d-flex justify-content-center" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="form-control w-50 me-2"
              placeholder="Search by name or specialty"
            />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
      </section>

      {/* Services Section */}
      <section className="services py-5" data-aos="fade-up" data-aos-delay="100">
        <div className="container text-center">
          <h2 className="mb-4">Our Services</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="service-card p-4 shadow-sm rounded">
                <div className="service-icon mb-3">🩺</div>
                <h5>Consult with Specialists</h5>
                <p>Find experienced doctors from various specialties for your health needs.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card p-4 shadow-sm rounded">
                <div className="service-icon mb-3">📅</div>
                <h5>Easy Appointment Booking</h5>
                <p>Schedule your visit effortlessly with just a few clicks on our platform.</p>
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

      {/* How It Works */}
      <section className="how-it-works bg-light py-5" data-aos="fade-up" data-aos-delay="200">
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

      {/* Testimonials */}
      <section className="testimonials py-5" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <h2 className="text-center mb-4">What Our Patients Say</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="testimonial-card p-4 shadow-sm rounded">
                <p>"Booking an appointment was so easy, and the doctors were very professional."</p>
                <h6 className="mt-3">- Priya S.</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card p-4 shadow-sm rounded">
                <p>"I found the perfect specialist quickly and had a great consultation."</p>
                <h6 className="mt-3">- Rahul M.</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card p-4 shadow-sm rounded">
                <p>"Customer support was amazing and helped me reschedule with ease."</p>
                <h6 className="mt-3">- Anjali K.</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2025 DocApp. All rights reserved.</p>
        <p>Contact us: support@docapp.com | +1 (555) 123-4567</p>
      </footer>

    </div>
  );
};

export default Home;
