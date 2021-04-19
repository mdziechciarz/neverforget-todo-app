import React from 'react';

import { Link } from 'react-router-dom';

import heroIllustration from '../../assets/hero.png';

import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.img} src={heroIllustration} alt="" />
      <div className={style.wrapper}>
        <div className={style.heading}>
          <h1>Get your life<br /><span>organized</span></h1>
          <p>“The man who moves a mountain begins by carrying away small stones.” - Confucius</p>
          <Link className={style.primaryCTA} to="signup">Get started</Link>
        </div>

      </div>
    </header>
  )
}

export default Header
