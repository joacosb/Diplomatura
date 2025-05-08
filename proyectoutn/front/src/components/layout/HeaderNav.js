import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo-inm-anelo1.png';
import '../../style/components/layout/HeaderNav.css';

const HeaderNav = () => {
  return (
    <header className="headernav">
      <div className="headernav-content">
        <img src={logo} alt="Logo Inmobiliaria Añelo" className="headernav-logo" />
        <nav className="nav">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/invertir" className="nav-link">Invertir</NavLink>
          <NavLink to="/alquilar" className="nav-link">Alquilar</NavLink>
          <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
          <NavLink to="/login" className="nav-link">Iniciar sesión</NavLink>

        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
