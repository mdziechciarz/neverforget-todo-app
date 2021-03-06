import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'
import style from './MobileMenu.module.css';

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`${style.mobileMenu} ${isOpen && style.active}`}>
      <div className={style.mobileCloseIcon} onClick={() => setIsOpen(false)}><FaTimes /></div>
      <ul>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu
