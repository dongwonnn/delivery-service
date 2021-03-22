import React from 'react';
import MenuOptions from './MenuOptions';
import './SelectOptions.scss';

const SelectOptions = ({ group, setTotalPrice }) => {
  const { name, required, min, max } = group;
  const isRequied = required ? '필수 선택' : '';

  return (
    <div className="select-options">
      <div className="select-options-cat">
        <p>
          {name} {`(${min}~${max})`}
        </p>
        <p>{isRequied}</p>
      </div>
      <div className="select-menu-option">
        {group.options.map((option) => (
          <MenuOptions option={option} key={option.id} min={min} max={max} />
        ))}
      </div>
    </div>
  );
};

export default SelectOptions;
