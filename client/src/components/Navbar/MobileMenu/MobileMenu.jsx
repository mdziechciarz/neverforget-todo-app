import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'
import style from './MobileMenu.module.css';

const MobileMenu = ({ isOpen, setIsOpen, isUserLogged, handleLogout }) => {
  return (
    <div className={`${style.mobileMenu} ${isOpen && style.active}`}>
      <div className={style.mobileCloseIcon} onClick={() => setIsOpen(false)}><FaTimes /></div>
      <ul>
        {isUserLogged ?
          <li><button className={style.logoutBtn} onClick={handleLogout}>Logout</button></li> :
          <>
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)}>Log In</Link>
            </li>
            <li>
              <Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
            </li>
          </>}
      </ul>
    </div>
  )
}

export default MobileMenu
