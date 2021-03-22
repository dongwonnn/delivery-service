import React from 'react';
import './SelectOptions.scss';
const SelectOptions = ({ group, setTotalPrice }) => {
  const { name, required } = group;

  const isRequied = required ? '필수 선택' : '';

  return (
    <div className="select-options">
      <div className="select-options-cat">
        <p>{name}</p>
        <p>{isRequied}</p>
      </div>
      <div className="select-menu-option">
        {group.options.map((option) => (
          <div className="select-menu-options" key={option.id}>
            <p>{option.name}</p>
            <p>{option.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectOptions;
