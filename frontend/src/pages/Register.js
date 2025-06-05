import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'patient',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registered as ${form.name} (${form.role})`);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <div className="border rounded shadow p-4 bg-white">
        <h2 className="mb-4 text-center">Create an Account</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter your full name"
              onChange={handleChange}
              required
              value={form.name}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={handleChange}
              required
              value={form.email}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              placeholder="Create a password"
              onChange={handleChange}
              required
              value={form.password}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="form-label">Register as</label>
            <select
              id="role"
              name="role"
              className="form-select"
              onChange={handleChange}
              value={form.role}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Register
          </button>

          <div className="text-center mt-3">
          <small>
            Don’t have an account? <Link to="/login">Login here</Link>
          </small>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
