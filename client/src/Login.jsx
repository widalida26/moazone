import React, { useState } from 'react';
import axios from 'axios';
import { setToken } from './Auth';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = () => {
    console.log('click login');
    if ((username === '') & (password === '')) {
      return;
    } else {
      axios
        .post('http://localhost:8000/login', {
          username: username,
          password: password,
        })
        .then(function (response) {
          if (response.data.token) {
            setToken(response.data.token);
            console.log(response.data.token);
          }
        })
        .catch(function (err) {
          console.log('err', err);
        });
    }
  };

  return (
    <div>
      Å<h2>Login</h2>
      <div>
        <label htmlFor="username">ID : </label>
        <input type="text" name="username" value={username} onChange={handleUsername} />
      </div>
      <div>
        <label htmlFor="password">PW : </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
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
