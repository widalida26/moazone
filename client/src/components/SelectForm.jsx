import React from 'react';

const SelectForm = (props) => {
  return (
    <div className="input-container">
      <div className="form-guide">{props.guide}</div>
      <select
        name="Income Type"
        className="select-container"
        selected={props.value}
        onChange={(event) => props.onSelect(event.target.value)}
      >
        {props.list.map((value, i) => (
          <option key={i} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectForm;
