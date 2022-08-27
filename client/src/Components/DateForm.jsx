import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateForm = (props) => {
  return (
    <div className="input-container">
      <div className="form-guide">{props.guide}</div>
      <DatePicker
        dateFormat="yyyy.MM.dd"
        selected={props.date}
        onChange={(date) => props.setDate(date)}
        popperPlacement="bottom"
      />
    </div>
  );
};
export default DateForm;
