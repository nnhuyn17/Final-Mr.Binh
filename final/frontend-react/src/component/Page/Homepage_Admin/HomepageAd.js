import classNames from 'classnames/bind';
import styles from './Homepage_Admin.module.scss';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Homepage_Admin() {
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));
  const [meetings, setMeetings] = useState([]);
  const pathBackEnd = "http://localhost:8081";

  useEffect(() => {
    // Function to fetch meetings for the current date
    const fetchMeetings = async () => {
      try {
        const response = await fetch(`http://localhost:8081/getByDate/${selectedDate}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          if (data.Status === 'Success') {
            setMeetings(data.Data);
          } else {
            console.error('Failed to fetch meetings:', data);
          }
        } else {
          console.error('Failed to fetch meetings. HTTP error:', response.status);
        }
      } catch (error) {
        console.error('Error fetching meetings:', error);
      }
    };
  
    // Fetch meetings when the component mounts
    fetchMeetings();
  }, [selectedDate]); 

  function formatDate(date) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;
    return `${year}-${month}-${day}`;
  }

  return (
    <section className={cx('hero')} id="home">
      <div className={cx('main-content')} >
        <h4>Hi Huyen</h4>
        <h1>
          Well <span>Comeback</span>
        </h1>
        <div className={cx('main-btn')}>
          <Link to ='yourBlog' className={cx('btn')}>
            View your blog
          </Link>
          <Link to = 'viewBooking' className={cx('btn', 'btn2')}>
            Your Booking
          </Link>
        </div>
      </div>
      <div className={cx('container')}>
        <div className={cx('left')}>
          <div>
            <label>Select Date: </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          {meetings.length === 0 ? (
            // If there are no meetings
            <h1>
              {selectedDate === formatDate(new Date())
                ? `Today, ${selectedDate}`
                : selectedDate < formatDate(new Date())
                ? `On ${selectedDate},`
                : `On ${selectedDate},`}
              <h2>
                {selectedDate === formatDate(new Date())
                  ? "You're free today!!"
                  : "You did not have a meeting."}
              </h2>
            </h1>
          ) : (
            // If there are meetings
            <>
              <h1 >
                {selectedDate === formatDate(new Date())
                  ? `Today, ${selectedDate}`
                  : selectedDate < formatDate(new Date())
                  ? `On ${selectedDate},`
                  : `On ${selectedDate},`}
              </h1>
              <h2>
                {selectedDate === formatDate(new Date())
                  ? "You have"
                  : "You had"}
              </h2>
              <ul>
                {meetings.map((meeting) => (
                  <li className = {cx('li-de')} key={meeting.id}>
                    {meeting.time_range}: {meeting.content} ({meeting.status})
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>

  );
}

export default Homepage_Admin;
