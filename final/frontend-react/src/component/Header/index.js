import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

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

      <div className={cx('top-btnn')}>
        <a href="#contact" className={cx('h-btn')}>Contact me</a>
      </div>
    </header>
  );
}

export default Header;
