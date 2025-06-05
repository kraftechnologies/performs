import React from 'react';
import logo from '../../assets/PerformX Logo.png';

export const RunningLogo: React.FC = () => {
  return (
    <img
      src={logo}
      alt="PerformX by Kraf Technologies Logo"
      className="w-100 h-8 object-cover"
    />
  );
};