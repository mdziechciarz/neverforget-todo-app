import React from 'react'
import { BiInfoCircle } from 'react-icons/bi';

import style from './Input.module.css';

const Input = ({ name, placeholder = '', error = null, requirements = [], value, handleOnChange }) => {
  return (
    <div className={`${style.row} ${error && style.error}`}>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
      { error && <div className={style.errorContainer}>
        <p className={style.errorMessage}>
          {error}
          {!!requirements.length && <span><BiInfoCircle /></span>}
        </p>
        {!!requirements.length && <div className={style.errorTooltip}>
          {requirements.map((requirement, index) => (
            <p key={index}>{requirement}</p>
          ))}
        </div>}
      </div>}
    </div>
  )
}

export default Input
