import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Homepage_Admin.module.scss';


// import { Link, Navigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function Homepage_Admin() {
  


  
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
          <div className={cx('calendar')}>
            <div className={cx('month')}>
              <i className={cx('fas', 'fa-angle-left', 'prev')} />
              <div className={cx('date')}>December 2015</div>
              <i className={cx('fas', 'fa-angle-right', 'next')} />
            </div>
            <div className={cx('weekdays')}>
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div className={cx('days')} />
          </div>
        </div>
        <div className={cx('right')}>
          <div className={cx('today-date')}>
            <div className={cx('event-day')}>wed</div>
            <div className={cx('event-date')}>12th december 2022</div>
          </div>
          <div className={cx('events')} />
          <div className={cx('add-event-wrapper')}>
            <div className={cx('add-event-header')}>
              <div className={cx('title')}>Add Event</div>
              <i className={cx('fas', 'fa-times', 'close')} />
            </div>
            <div className={cx('add-event-body')}>
              <div className={cx('add-event-input')}>
                <input
                  type="text"
                  placeholder="Event Name"
                  className={cx('event-name')}
                />
              </div>
              <div className={cx('add-event-input')}>
                <input
                  type="text"
                  placeholder="Event Time From"
                  className={cx('event-time-from')}
                />
              </div>
              <div className={cx('add-event-input')}>
                <input
                  type="text"
                  placeholder="Event Time To"
                  className={cx('event-time-to')}
                />
              </div>
            </div>
            <div className={cx('add-event-footer')}>
              <button className={cx('add-event-btn')}>Add Event</button>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Homepage_Admin;
