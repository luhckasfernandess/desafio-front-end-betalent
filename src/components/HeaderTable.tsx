import React from 'react';

export const HeaderTable: React.FC = () => {
  const logo = "../src/assets/betalent-logo.svg";

  return (
    <header>
      <img src={logo} alt="Logo Betalent" />
    </header>
  );
};