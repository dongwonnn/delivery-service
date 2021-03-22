import React from 'react';
import './MenuOptions.scss';

const transStrToInt = (strPrice) => strPrice.replace(',', '');

const MenuOptions = ({ option, min, max }) => {
  return (
    <div className="menu-option" key={option.id}>
      <form>
        <input
          type="checkbox"
          id={option.id}
          name={option.name}
          value={option.price}
        />
        <label htmlFor={option.id}>{option.name}</label>
      </form>
      <p>+{transStrToInt(option.price)}</p>
    </div>
  );
};

export default MenuOptions;
