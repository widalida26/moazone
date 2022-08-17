import React, { useState } from 'react';

function Login() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    console.log('click login');
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="input_id">ID : </label>
        <input type="text" name="input_id" value={inputId} onChange={handleInputId} />
      </div>
      <div>
        <label htmlFor="input_pw">PW : </label>
        <input type="password" name="input_pw" value={inputPw} onChange={handleInputPw} />
      </div>
      <div>
        <button type="button" onClick={onClickLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
