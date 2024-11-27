import React from 'react';
import '../styles/Header.css';

export const HeaderTable: React.FC = () => {
  const logo = "../src/assets/betalent-logo.svg";

  return (
    <header>
      <img className='logo' src={logo} alt="Logo Betalent" />
    </header>
  );
};