import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [roleInput, setRoleInput] = useState('patient');
  const { setRole } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setRole(roleInput);
    navigate(roleInput === 'doctor' ? '/dashboard/doctor' : '/dashboard/patient');
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <select className="form-control mb-2" value={roleInput} onChange={(e) => setRoleInput(e.target.value)}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
