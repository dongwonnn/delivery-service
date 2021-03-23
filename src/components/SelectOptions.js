import React from 'react';
import './SelectOptions.scss';

const SelectOptions = ({
  totalPrice,
  group,
  setTotalPrice,
  count,
  setDefaultPrice,
  defaultPrice,
}) => {
  const { name, required, min, max } = group;
  const isRequied = required ? '필수 선택' : '';
  const toggle = new Array(group.options.length).fill(false);

  console.log(toggle);

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
  );
};

export default SelectOptions;
