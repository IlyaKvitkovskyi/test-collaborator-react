import React from 'react';
import './Switch.scss';

export default function BasicSwitch({isActive, handleToggle}) {
  return (
    <input
      checked={isActive}
      onChange={() => handleToggle(!isActive)}
      className="react-switch-checkbox"
      id={`react-switch-new`}
      type="checkbox"
    />
  );
}
