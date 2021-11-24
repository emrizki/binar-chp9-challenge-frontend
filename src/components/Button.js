import React from 'react';

const Button = ({ variant, text, action }) => {
  return (
    <button
      style={{ width: '7rem' }}
      className={`btn btn-${variant} m-1`}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
