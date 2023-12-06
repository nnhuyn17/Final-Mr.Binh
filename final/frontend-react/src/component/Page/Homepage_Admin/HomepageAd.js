import classNames from 'classnames/bind';
import styles from './Homepage_Admin.module.scss';
import React, { useState, useEffect } from 'react';


// import { Link, Navigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function Homepage_Admin() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the current date every second
      setCurrentDate(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  // Extract day, date, and time from the current date
  const day = currentDate.toLocaleString('en-US', { weekday: 'long' });
  const date = currentDate.toLocaleDateString();
  const time = currentDate.toLocaleTimeString();

  return (
    <section className={cx('hero')} id="home">
      <div className={cx('main-content')} >
        <h4>Hi Huyen</h4>
        <h1>
          Well <span>Comeback</span>
        </h1>
        <div className={cx('main-btn')}>
          <a href="/final/fontend/admin/homepageBlog/index.html" className={cx('btn')}>
            View your blog
          </a>
          <a href="" className={cx('btn', 'btn2')}>
            Your Booking
          </a>
        </div>
      </div>
      <div className={cx('container')}>
        <div className={cx('left')}>
          <h1>Today,</h1>
          <h1>
          {day} <span>{date}</span>
          </h1>
          <div className={cx('content')}>
                
          </div>
        </div>


        
      </div>
    </section>

  );
}

export default Homepage_Admin;
