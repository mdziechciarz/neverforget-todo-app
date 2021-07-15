import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/user';
import { FaBars } from 'react-icons/fa'

import MobileMenu from './MobileMenu/MobileMenu';

import style from './Navbar.module.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const isUserLogged = useSelector(store => store.user.isLogged)
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = () => dispatch(logout());
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
            {isUserLogged ? <li><button className={style.logoutBtn} onClick={handleLogout}>Logout</button></li> :
              <>
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/signup" className={style.signUpBtn}>Sign Up</Link></li>
              </>}
          </ul>
          <div className={style.mobileOpenIcon} onClick={() => setIsMobileOpen(true)}><FaBars /></div>
        </div>
      </nav>
      {isMobile && <MobileMenu handleLogout={handleLogout} isUserLogged={isUserLogged} isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />}
    </>
  );
}

export default Navbar
