import { useState } from 'react'
import { BiInfoCircle } from 'react-icons/bi';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import style from './Input.module.css';

const PasswordInput = ({ name, placeholder = '', error = null, requirements = [], value, handleOnChange, isLoginView }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSwitchPassowordVisibility = () => setIsPasswordVisible(prev => !prev);

  return (
    <div className={`${style.row} ${error && style.error}`}>
      <div className={style.passwordRow}>
        <input
          name={name}
          type={isPasswordVisible ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
        />
        {
          !isLoginView && value && <i className={style.eyeIcon} onClick={handleSwitchPassowordVisibility}>{isPasswordVisible ? <FaEyeSlash /> : <FaEye />}</i>
        }
      </div>
      { error && <div className={style.errorContainer}>
        <p className={style.errorMessage}>
          {error}
          {!!requirements.length && <span><BiInfoCircle /></span>}
        </p>
        {!!requirements.length && <div className={style.errorTooltip}>
          {requirements.map((rule, index) => (
            <p key={index}>{rule}</p>
          ))}
        </div>}
      </div>}
    </div>
  )
}

export default PasswordInput;
