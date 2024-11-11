import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path to your logo file

function Logo() {
  return (
    <div>
      <img src={logo} alt="Company Logo" style={{ width: '100px', height: 'auto' }} />
    </div>
  );
}

export default Logo; 