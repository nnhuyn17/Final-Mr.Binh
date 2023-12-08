import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ViewUserAdmin.module.scss';


// import { Link, Navigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function ViewUserAdmin() {
  const [data, setData] = useState([]);
  const pathBackEnd = "https://backend-final-web.onrender.com";

  const fetchData = () => {
    // Fetch data from the server
    fetch(`https://backend-final-web.onrender.com/getAllDemo`)
    .then(response => response.json())
    .then(data => {
      setData(data.accounts);
    })
      .catch(error => console.error('Error fetching data:', error));
  };

  
  useEffect(() => {
    fetchData();
  }, []);



  return (
    <body>
      <section className={cx('hero')} >
        <div className={cx('main-content')} >
          <h2>
            List<span> User</span>
          </h2>
          <div className={cx('BookingList')}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Full name</th>
            <th>Position</th>
            <th>Company</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.full_name}</td>
              <td>{item.position}</td>
              <td>{item.company}</td>
              <td>{item.date_of_birth}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
      </section>
    </body>

  );
}

export default ViewUserAdmin;
