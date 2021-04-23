import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Input from './Input/Input';
import PasswordInput from './Input/PasswordInput';

import userCircle from '../../../assets/userCircle.png';

import style from './Form.module.css';

const usernameRequirements = ['At least 6 characters long', 'Only alphabetical characters'];
const passwordRequirements = ['At least 8 characters long', 'At least 1 uppercase letter', 'At least 1 digit', 'At least 1 special symbol'];

const Form = () => {
  const location = useLocation();
  const [isLoginView, setIsLoginView] = useState(location.pathname === "/login");
  const isTabletOrBigger = useMediaQuery({ minWidth: 800 });
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errorMessages, setErrorMessages] = useState({
    username: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    setIsLoginView(location.pathname === "/login");
  }, [location]);

  const handleSwitchView = e => {
    e.preventDefault();
    setIsLoginView(prev => !prev);
  }

  const handleInputChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMessages(prev => ({ ...prev, [e.target.name]: '' }));
  }


  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.userIcon}>
          <img src={userCircle} alt="User icon" />
        </div>
        <p className={style.title}> {isLoginView ? "Log In" : "Create Account"} </p>
        <form className={style.form}>
          {!isLoginView && <Input name="username" placeholder="Username" error={errorMessages.username} value={formData.username} handleOnChange={handleInputChange} requirements={usernameRequirements} />}
          <Input name="email" placeholder="E-mail" error={errorMessages.email} value={formData.email} handleOnChange={handleInputChange} />
          <PasswordInput name="password" placeholder="Password" error={errorMessages.password} value={formData.password} handleOnChange={handleInputChange} isLoginView={isLoginView} requirements={passwordRequirements} />
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
