import React from 'react';

const RadioForm = (props) => {
  const answerList = props.answerList !== null ? props.answerList : [('Yes', 'No')];
  return (
    <div className="input-container">
      <div className="form-guide">{props.guide}</div>
      <div className="radio-container">
        {props.list.map((value, i) => (
          <React.Fragment key={i}>
            <div className="radio-input">
              {value}{' '}
              <input
                value={value}
                type="radio"
                checked={props.state === value}
                onClick={props.onClick}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default RadioForm;
