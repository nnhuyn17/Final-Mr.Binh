import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ViewBooking_User.module.scss';


// import { Link, Navigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function ViewBookingUser() {
  const [meetingData, setMeetingData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/meetingDemo/')
      .then(response => response.json())
      .then(data => {
        setMeetingData(data.accounts);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDeleteMeeting = (id) => {
    fetch(`http://localhost:8081/deleteMeeting/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // If the deletion is successful, update the local state
          setMeetingData(prevData => prevData.filter(meeting => meeting.id !== id));
        } else {
          console.error(`Failed to delete meeting with ID ${id}`);
        }
      })
      .catch(error => {
        console.error('Error deleting meeting:', error);
      });
    }
  return (
    <body>
      <section className={cx('hero')} >
        <div className={cx('main-content')} >
          <h2>
            Your <span>Booking Requirement</span>
          </h2>
          <div className={cx('text')}>We will respond to your request as soon as possible, please be patient </div>
          <div className={cx('BookingList')}>
      <table>
        <thead>
          <tr>
            <th className={cx('ID')}>ID</th>
            <th className={cx('content')}>Content</th>
            <th className={cx('timeRange')}>Time range</th>
            <th className={cx('dateMeeting')}>Date Meeting</th>
            <th className={cx('status')}>Status</th>
            <th className={cx('delete')}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {meetingData.map(meeting => (
            <tr key={meeting.id}>
              <td className={cx('ID')}>{meeting.id}</td>
              <td className={cx('content')}>{meeting.content}</td>
              <td className={cx('timeRange')}>{meeting.time_range}</td>
              <td className={cx('dateMeeting')}>{meeting.date}</td>
              <td className={cx('status')}>{meeting.status}</td>
              <td className={cx('delete')}>
                <button onClick={() => handleDeleteMeeting(meeting.id)}>
                  Delete
                </button>
              </td>
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

export default ViewBookingUser;
