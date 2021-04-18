import React from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import style from './MobileMenu.module.css';

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`${style.mobileMenu} ${isOpen && style.active}`}>
      <div className={style.mobileCloseIcon} onClick={() => setIsOpen(false)}><FaTimes /></div>
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
  )
}

export default MobileMenu
