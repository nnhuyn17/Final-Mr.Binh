import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import UserDialog from '../Items/UserDialog'; // Adjust the import path based on your file structure

const cx = classNames.bind(styles);

function Header() {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [fullName, setFullName] = useState(false);
  const [isUserDialogOpen, setUserDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 120);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleUserIconClick = () => {
    setUserDialogOpen(true);
  };

  const handleUserDialogClose = () => {
    setUserDialogOpen(false);
  };

  const handleLogout = () => {
    // Handle logout logic (e.g., clear local storage, navigate to login page)
    console.log('Logout clicked');
    handleUserDialogClose();
  };

  const handleViewProject = () => {
    // Handle view project logic (e.g., navigate to project page)
    console.log('View Project clicked');
    handleUserDialogClose();
  };

  useEffect(() => {
    // Fetch the user's full name from the server based on the account ID
    const fetchFullName = async () => {
      try {
        const accountID = localStorage.getItem('accountID');
        const response = await fetch(`http://localhost:8081/getFullNameByID/${accountID}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setFullName(data.Account[0].full_name);
        }
      } catch (error) {
        console.error('Error fetching full name:', error);
      }
  };
  fetchFullName();
  }, []);

  if (localStorage.getItem("currentRole") === 'user') {
    return (
      <header className={cx('header', { sticky: isSticky })}>
        <a href="#" className={cx('logo')}>Code<span>Xplore</span></a>
        <div
          className={cx('bx', 'bx-menu', { 'bx-x': isMenuOpen })}
          id="menu-icon"
          onClick={handleMenuClick}
        ></div>

        <ul className={cx('navlist', { active: isMenuOpen })}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <span className={cx('top-btnn')} onClick={handleUserIconClick}>
              <div className='accountName'>{fullName}</div>
        </span>

        {isUserDialogOpen && (
                        <div className={cx('overlay')} onClick={handleUserDialogClose}>
                            <UserDialog onClose={handleUserDialogClose} />
                        </div>
        )}
      </header>
    )
  }
  else if (localStorage.getItem("currentRole") === 'admin'){
    return (
      <header className={cx('header', { sticky: isSticky })}>
        <a href="#" className={cx('logo')}>Code<span>Xplore</span></a>
        <div
          className={cx('bx', 'bx-menu', { 'bx-x': isMenuOpen })}
          id="menu-icon"
          onClick={handleMenuClick}
        ></div>

        <ul className={cx('navlist', { active: isMenuOpen })}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">View Booking</a></li>
          <li><a href="#portfolio">View User</a></li>
        </ul>

        <span className={cx('top-btnn')} onClick={handleUserIconClick}>
              <div className='accountName'>{fullName}</div>
        </span>

        {isUserDialogOpen && (
                        <div className={cx('overlay')} onClick={handleUserDialogClose}>
                            <UserDialog onClose={handleUserDialogClose} />
                        </div>)}
      </header>

    )
  }
  else{
    return(
      <header className={cx('header', { sticky: isSticky })}>
        <a href="#" className={cx('logo')}>Code<span>Xplore</span></a>
        <div
          className={cx('bx', 'bx-menu', { 'bx-x': isMenuOpen })}
          id="menu-icon"
          onClick={handleMenuClick}
        ></div>
      </header>
    )
  }
}

export default Header;
