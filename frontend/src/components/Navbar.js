import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { role, setRole } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setRole(null);
    alert("Logged out");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">🩺 DocApp</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          {role === 'patient' && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/patient">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/book">Book</Link>
              </li>
            </>
          )}
          {role === 'doctor' && (
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/doctor">Appointments</Link>
            </li>
          )}
        </ul>

        <div className="d-flex">
          {role ? (
            <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link className="btn btn-outline-light me-2" to="/register">Register</Link>
              <Link className="btn btn-outline-light" to="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
