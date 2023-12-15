import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

function Login() {
  const pathBackEnd = "https://backend-final-web.onrender.com";

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://backend-final-web.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const { token, role: userRole, id: accountId } = data;
  
        // Store token, role, and account ID in local storage
        localStorage.setItem('accountID', accountId);
        localStorage.setItem('currentRole', userRole);
  
        // Navigate based on the retrieved role from local storage
        if (userRole === 'user') {
          navigate('/home');
          localStorage.setItem('token-user', token);
          window.location.reload();

        }
        else if (userRole === 'admin') {
          localStorage.setItem('token-admin', token);
          navigate('/homeAd');
          window.location.reload();
        }

      } else {
        // Handle login failure (e.g., display an error message)
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  console.log("Day la token-admin" , localStorage.getItem('token-admin'));
  console.log("Day la token-user" ,localStorage.getItem('token-user'));

  return (
    <section className={cx("hero")} >
      <div className={cx("Login")}>
        <div className={cx("text")}>
          <h1>Login</h1>
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
                <a className={cx("regis")} >
                <Link  className={cx("regis")} to = "/signup">Do not have an account?</Link>
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
