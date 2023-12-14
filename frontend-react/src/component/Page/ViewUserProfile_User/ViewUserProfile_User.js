import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ViewUserProfile_User.module.scss';
import { Link } from 'react-router-dom';


// import { Link, Navigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function ViewUserProfile_User() {
  const [data, setMeetingData] = useState([]);

  useEffect(() => {
    const fetchMeetingData = async () => {
      try {
        const response = await fetch(`http://localhost:8081/getUserByID/${localStorage.getItem("accountID")}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        console.log('responseData:', responseData);

        setMeetingData(responseData.Account || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMeetingData();
  }, []);

  return (
    <body>
      <section className={cx('hero')}>

        <div className={cx('main-btn')}>
          <h2>
            Your<span> Profile</span>
          </h2>


        </div>
        <div className={cx('pro5')}>
          {data && data.length > 0 ? (
            <ul  className={cx("custom-list")}>
              {data.map((item) => (
                <li key={item.id} className={cx("list-item")}>
                  <span className={cx("property")}>Full Name:</span> <span className={cx("value")}>{item.full_name}</span><br />
                  <span className={cx("property")}>Email:</span> <span className={cx("value")}>{item.email}</span><br />
                  <span className={cx("property")}>Position:</span> <span className={cx("value")}>{item.position}</span><br />
                  <span className={cx("property")}>Company:</span> <span className={cx("value")}>{item.company}</span><br />
                  <span className={cx("property")}>Gender:</span> <span className={cx("value")}>{item.Gender}</span><br />
                  <span className={cx("property")}>Phone Number:</span> <span className={cx("value")}>{item.PhoneNumber}</span><br />
                  <span className={cx("property")}>Date of Birth:</span> <span className={cx("value")}>{item.date_of_birth}</span><br />
                </li>
              ))}
            </ul>
          ) : (
            <p>No data available</p>
          )}
        </div>

      </section>
    </body>
  );
}


export default ViewUserProfile_User;
