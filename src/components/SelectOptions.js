import React, { useEffect, useRef } from 'react';
import './SelectOptions.scss';

const SelectOptions = ({ group, setTotalPrice }) => {
  const { name, required, min, max } = group;
  const isRequied = required ? '필수 선택' : '';

  return (
    <div className="select-options">
      <div className="select-options-cat">
        <p>{`${name} (${min}~${max})`}</p>
        <p>{isRequied}</p>
      </div>
      <div className="select-menu-options">
        {group.options.map((option) => (
          <div className="select-menu-option" key={option.id}>
            <div>
              <input
                type="checkbox"
                id={option.id}
                name={name}
                value={option.name}
              />
              <label htmlFor={option.id}>{option.name}</label>
            </div>
            <p>+ {option.price}</p>
          </div>
        ))}
      </div>
    </div>
    // <MenuOptions
    //   option={option}
    //   key={option.id}
    //   name={name}
    //   min={min}
    //   max={max}
    //   formData={formData}
    // />
  );
};

export default SelectOptions;
