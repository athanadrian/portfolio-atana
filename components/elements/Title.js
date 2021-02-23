import React from 'react';

const Title = ({ label, size, className }) => {
  return (
    <strong style={{ fontSize: size }} className={className}>
      {label}
    </strong>
  );
};

export default Title;
