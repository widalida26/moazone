import React from 'react';

const InputForm = (props) => {
  return (
    <div className="input-container">
      <div className="form-guide">{props.guide}</div>
      <input
        className="info-input"
        type={props.type ? props.type : 'text'}
        value={props.value}
        ref={props.inputRef ? props.inputRef : null}
        onChange={props.onChange}
      />
      {props.unit ? <span class="input-unit">{props.unit}</span> : null}
    </div>
  );
};
export default InputForm;
