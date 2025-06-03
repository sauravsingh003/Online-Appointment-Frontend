import { useState } from 'react';

function BookAppointment() {
  const [form, setForm] = useState({ doctor: '', date: '', time: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with ${form.doctor} on ${form.date} at ${form.time}`);
  };

  return (
    <div className="container mt-5">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="doctor" placeholder="Doctor Name" onChange={handleChange} required />
        <input className="form-control mb-2" name="date" type="date" onChange={handleChange} required />
        <input className="form-control mb-2" name="time" type="time" onChange={handleChange} required />
        <button className="btn btn-primary">Book</button>
      </form>
    </div>
  );
}

export default BookAppointment;
