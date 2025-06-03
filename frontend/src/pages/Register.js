import { useState } from 'react';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'patient' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registered as ${form.name} (${form.role})`);
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input className="form-control mb-2" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input className="form-control mb-2" name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input className="form-control mb-2" name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <select className="form-control mb-2" name="role" onChange={handleChange}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
        <button className="btn btn-success">Register</button>
      </form>
    </div>
  );
}

export default Register;
