import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ViewBooking_User.module.scss';


// import { Link, Navigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function ViewBookingUser() {
  const [meetingData, setMeetingData] = useState([]);

  const pathBackEnd = "http://localhost:8081";

  useEffect(() => {
    const fetchMeetingData = async () => {
      try {
        const response = await fetch(`http://localhost:8081/getAllBookingByUserID/${localStorage.getItem("accountID")}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setMeetingData(data.Data);
      } catch (error) {

      }
    };

    fetchMeetingData();
  }, []);

  const handleDeleteMeeting = (id, status) => {
    const isConfirmed = window.confirm('Are you sure you want to delete?');
    
    if (isConfirmed) {
      fetch(`http://localhost:8081/deleteMeeting/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            // If the deletion is successful, update the local state
            setMeetingData(prevData => prevData.filter(meeting => meeting.id !== id));
            alert('Deleted successfully ');
          } else {
            if (response.status === 404) {
              // Meeting not found or status is not 'pending'
              alert('Meeting not found or the status is not "pending." Unable to delete.');
            } else {
              console.error(`Failed to delete meeting with ID ${id}`);
            }
          }
        })
        .catch(error => {
          console.error('Error deleting meeting:', error);
        });
    }
  };


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
