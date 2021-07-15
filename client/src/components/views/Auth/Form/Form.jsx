import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { login, register } from '../../../../actions/user';

import Input from './Input/Input';
import PasswordInput from './Input/PasswordInput';
import userCircle from '../../../../assets/user_circle.png';

import style from './Form.module.css';

const usernameRequirements = ['Between 6 and 20 characters long', 'Only contains alphabetic characters, underscore and dot', 'Underscore and dot can\'t be at the start or end.'];
const passwordRequirements = ['Minimum 8 characters long', 'At least 1 letter, digit and special character'];
const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const USERNAME_REGEX = /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const Form = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const [isLoginView, setIsLoginView] = useState(location.pathname === "/login");
  const isTabletOrBigger = useMediaQuery({ minWidth: 800 });
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errorMessages, setErrorMessages] = useState({ username: '', email: '', password: '' });

  useEffect(() => {
    setIsLoginView(location.pathname === "/login");
    setErrorMessages({ username: '', email: '', password: '' });
  }, [location]);

  const handleSwitchView = e => {
    e.preventDefault();
    setErrorMessages({ username: '', email: '', password: '' })
    history.push(isLoginView ? "/signup" : "/login")
    // setIsLoginView(prev => !prev);
  }

  const handleInputChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMessages(prev => ({ ...prev, [e.target.name]: '' }));
  }

  const handleSubmit = e => {
    e.preventDefault();


    if (isLoginView) {
      // VALIDATION
      if (!formData.email || !formData.password)
        return;

      dispatch(login({
        email: formData.email,
        password: formData.password
      }))

    } else {
      // VALIDATION
      if (!formData.username || !formData.email || !formData.password) {
        setErrorMessages(prev => ({
          ...prev,
          username: formData.username ? '' : 'Required',
          email: formData.email ? '' : 'Required',
          password: formData.password ? '' : 'Required'
        }))
        return;
      }

      let isValid = true;
      if (!USERNAME_REGEX.test(formData.username)) {
        isValid = false;
        setErrorMessages(prev => ({ ...prev, username: 'Invalid username' }));
      }
      if (!EMAIL_REGEX.test(formData.email)) {
        isValid = false;
        setErrorMessages(prev => ({ ...prev, email: 'Invalid email address' }));
      }
      if (!PASSWORD_REGEX.test(formData.password)) {
        isValid = false;
        setErrorMessages(prev => ({ ...prev, password: 'Invalid password' }));
      }

      if (isValid) {
        dispatch(register({
          username: formData.username, email: formData.email, password: formData.password
        }))
      }
    }


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
            <button className={style.submitBtn} onClick={handleSubmit}>{isLoginView ? "Log In" : "Sign Up"}</button>
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

export default Form;

