import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8081/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email, 
          password: password,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        const { token } = data;
      
        // Assuming you want to store the token in localStorage
        localStorage.setItem('token', token);
      
        // Navigate to the home page
        navigate('/home');
      } else {
        // Handle login failure (e.g., display an error message)
        console.error('Login failed');
      }
      
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };


  return (
    <section className={cx("hero")} >
      <div className={cx("Login")}>
        <div className={cx("text")}>
          <h2>Login</h2>
        </div>
        <div className={cx("form")}>
          <label for="uname">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className={cx("regis")}>
            <p className={cx("regis")}>
              <i>
                <a className={cx("regis")} href="/signup/index.html">
                  Do not have an account?
                </a>
              </i>
            </p>
          </div>

          <button type="button" onClick={handleSubmit}>
            Login
          </button>

        </div>
      </div>
    </section>
  );
}

export default Login;
