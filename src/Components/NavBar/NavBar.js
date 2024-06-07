import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">Главная</Link>
        </li>
        <li>
          <Link to="/theory" className="nav-link">Теория</Link>
        </li>
        <li>
          <Link to="/practice" className="nav-link">Практика</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
