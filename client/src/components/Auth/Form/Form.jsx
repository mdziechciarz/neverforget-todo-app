import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import userCircle from '../../../assets/userCircle.png';

import style from './Form.module.css';

const Form = () => {
  const [isLoginView, setIsLoginView] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isTabletOrBigger = useMediaQuery({ minWidth: 800 });

  const handleSwitchView = e => {
    e.preventDefault();
    setIsLoginView(prev => !prev);
  }
  const handleSwitchPassowordVisibility = () => setIsPasswordVisible(prev => !prev)

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.userIcon}>
          <img src={userCircle} alt="User icon" />
        </div>
        <p className={style.title}> {isLoginView ? "Log In" : "Create Account"} </p>
        <form className={style.form}>
          {!isLoginView && (<div className={style.row}>
            <input type="text" placeholder="Username" />
          </div>)}
          <div className={style.row}>
            <input type="text" placeholder="E-mail" />
          </div>
          <div className={style.row}>
            <div className={style.passwordRow}>
              <input type={isPasswordVisible ? "text" : "password"} placeholder="Password" />
              {
                !isLoginView && <i className={style.eyeIcon} onClick={handleSwitchPassowordVisibility}>{isPasswordVisible ? <FaEyeSlash /> : <FaEye />}</i>
              }
            </div>
          </div>
          <div className={style.buttons}>
            <button className={style.submitBtn}>{isLoginView ? "Log In" : "Sign Up"}</button>
            <button className={style.switchViewBtn} onClick={handleSwitchView}>
              {isTabletOrBigger ?
                (isLoginView ? "Sign In" : "Log In")
                : (isLoginView ? "Don't have account yet? Sign In" : "Already have an account? Log In")
              }</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
