import React from 'react';
import './BodyBlackoutStyle.scss';

const BodyBlackoutStyle = ({ onSetIsVisible }) => {
  return (
    <div
      className="body-blackout-style"
      onClick={() => onSetIsVisible(false)}
    ></div>
  );
};

export default BodyBlackoutStyle;
