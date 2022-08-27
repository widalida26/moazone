import React from 'react';

const RadioForm = (props) => {
  const answerList = props.list ? props.list : ['Yes', 'No'];
  return (
    <div className="input-container">
      <div className="form-guide">{props.guide}</div>
      <div className="radio-container">
        {answerList.map((value, i) => (
          <React.Fragment key={i}>
            <div className="radio-input">
              {value}{' '}
              <input
                className="radio-select"
                value={value[0]}
                type="radio"
                checked={props.state === value[0]}
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
