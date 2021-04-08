import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa'

import style from './Navbar.module.css';

const Navbar = () => {
  const [isMobileOpened, setIsMobileOpened] = useState(true);
  return (
    <nav>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <Link to="/">
            Never<span>Forget</span>
          </Link>
        </div>
        <ul className={style.menu}>
          <li><Link to={{
            pathname: "/auth",
            state: { loginView: true }
          }}>Log In</Link></li>
          <li><Link to={{
            pathname: "/auth",
            state: { loginView: false }
          }} className={style.signUpBtn}>Sign Up</Link></li>
        </ul>
        <div className={style.mobileOpenIcon} onClick={() => setIsMobileOpened(true)}><FaBars /></div>
      </div>
      <div className={`${style.mobileMenu} ${isMobileOpened && style.active}`}>
        <div className={style.mobileCloseIcon} onClick={() => setIsMobileOpened(false)}><FaTimes /></div>
        <ul>
          <li>
            <Link to={{
              pathname: "/auth",
              state: { loginView: false }
            }}>Log In</Link>
          </li>
          <li>
            <Link to={{
              pathname: "/auth",
              state: { loginView: false }
            }}>Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
