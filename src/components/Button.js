import React from 'react';

const Button = ({ variant, text, action }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={action}>
      {text}
    </button>
  );
};

export default Button;
