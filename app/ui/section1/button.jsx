// Button.jsx
import React from 'react';

// Props could include children (button label), onClick handler, and any other props you might need, like 'variant' for different button styles
const Button = ({ children, onClick, variant = 'primary' }) => {
  // Determine button style based on the 'variant' prop
  const baseStyle = 'font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline';
  const variantStyle = {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
    danger: 'bg-red-500 hover:bg-red-700 text-white',
    // Add more variants as needed
  }[variant];

  // Combine base styles with variant-specific styles
  const buttonStyle = `${baseStyle} ${variantStyle}`;

  return (
    <button onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
