import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#demo">Demo</a>
        <a href="#showcase">Showcase</a>
        <a href="#testing">User Testing</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
