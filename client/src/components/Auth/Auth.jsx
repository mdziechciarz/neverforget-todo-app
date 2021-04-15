import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Form from './Form/Form';
import Quote from './Quote/Quote';

import style from './Auth.module.css';

const Auth = () => {
  const isDesktop = useMediaQuery({ minWidth: 1200, orientation: 'landscape' });

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {isDesktop && <Quote />}
        <Form />
      </div>
    </div>
  )
}

export default Auth
