import React from 'react';

const InputForm = (props) => {
  return (
    <div className="input-container">
      <div className="form-guide">{props.guide}</div>
      <input
        className="info-input"
        type={props.type === null ? 'text' : props.type}
        value={props.value}
        ref={props.inputRef}
        onChange={props.onChange}
      />
    </div>
  );
};
export default InputForm;
