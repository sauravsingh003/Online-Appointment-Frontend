import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const { role, setRole } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setRole(null);
    alert("Logged out");
    navigate("/");
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Close menu on link click (for mobile UX)
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="custom-navbar">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="navbar-brand logo" onClick={closeMenu}>🩺 DocApp</Link>

        {/* Hamburger button */}
        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </div>

        {/* Nav links - toggle show on mobile */}
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/doctors" onClick={closeMenu}>All Doctors</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>

          {role === 'patient' && (
            <>
              <li><Link to="/dashboard/patient" onClick={closeMenu}>Dashboard</Link></li>
              <li><Link to="/book" onClick={closeMenu}>Book</Link></li>
            </>
          )}

          {role === 'doctor' && (
            <li><Link to="/dashboard/doctor" onClick={closeMenu}>Appointments</Link></li>
          )}

          {/* Show create account or logout inside menu on mobile */}
          <li className="mobile">
            {role ? (
              <button className="btn logout-btn" onClick={handleLogout}>Logout</button>
            ) : (
              <Link className="btn create-btn" to="/register" onClick={closeMenu}>Create Account</Link>
            )}
          </li>
        </ul>

        {/* Show button on desktop only */}
        <div className="desktop-btn">
          {role ? (
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          ) : (
            <Link className="create-btn" to="/register">Create Account</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
