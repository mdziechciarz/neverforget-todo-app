import React from 'react';
import style from './Quote.module.css';

const Quote = () => {
  return (
    <div className={style.container}>
      <p className={style.quote}>Success is the sum of small efforts repeated day in and day out.
        <span className={style.author}>-Robert Collierv</span>
      </p>
    </div>
  )
}

export default Quote
