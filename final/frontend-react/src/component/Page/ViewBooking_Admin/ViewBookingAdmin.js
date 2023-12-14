import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ViewBooking_Admin.module.scss';


// import { Link, Navigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function ViewBookingAdmin() {
  const [data, setData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(''); // State to store the selected status

  const fetchData = () => {

    // Fetch data from the server with optional status parameter
    const url = selectedStatus
      ? `http://localhost:8081/getDatafromUserAndMeetingFillter/${selectedStatus}`
      : `http://localhost:8081/getDatafromUserAndMeeting`;

    fetch(url)
      .then(response => response.json())
      .then(data => setData(data.Data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleRejectMeeting = (id) => {
    // Make a request to update the meeting status to 'rejected'
    fetch(`http://localhost:8081/UpdateMeetingByID/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 'rejected',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Meeting rejected:', data);
        // Fetch updated data after status change
        fetchData();
      })
      .catch((error) => {
        console.error('Error rejecting meeting:', error);
      });
  };

  const handleApproveMeeting = (id) => {
    // Make a request to update the meeting status to 'approved'
    fetch(`http://localhost:8081/UpdateMeetingByID/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 'approved',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Meeting approved:', data);
        // Fetch updated data after status change
        fetchData();
      })
      .catch((error) => {
        console.error('Error approving meeting:', error);
      });
  };

  useEffect(() => {
    // Fetch initial data from the server
    fetchData();
  }, [selectedStatus]); // Include selectedStatus in the dependency array

  return (
    <body>
      <section className={cx('hero')} >
        <div className={cx('main-content')} >


          <div className={cx('filtering')}>
            <h2>
              Booking<span> Requirement</span>
            </h2>
            <label>Status</label>
            <select onChange={(e) => setSelectedStatus(e.target.value)} className={cx('selectF')} >
              <option value="">All</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          <div className={cx('BookingList')}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Full name</th>
                  <th>Email</th>
                  <th>Position</th>
                  <th>Company</th>
                  <th>Content</th>
                  <th>Time range</th>
                  <th>Date Meeting</th>
                  <th>Status</th>
                  <th className={cx('delete')}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.full_name}</td>
                    <td>{item.email}</td>
                    <td>{item.position}</td>
                    <td>{item.company}</td>
                    <td>{item.content}</td>
                    <td>{item.time_range}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                    <td className={cx('delete')}>
                      <button onClick={() => handleApproveMeeting(item.id)}>
                        Approved
                      </button>
                      <button onClick={() => handleRejectMeeting(item.id)}>
                        Rejected
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

export default ViewBookingAdmin;
