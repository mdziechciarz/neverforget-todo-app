import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaBars, FaTimes } from 'react-icons/fa'

import MobileMenu from './MobileMenu/MobileMenu';

import style from './Navbar.module.css';

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <>
      <nav className={style.navbar}>
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
          <div className={style.mobileOpenIcon} onClick={() => setIsMobileOpen(true)}><FaBars /></div>
        </div>
      </nav>
      {isMobile && <MobileMenu isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />}
    </>
  );
}

export default Navbar
