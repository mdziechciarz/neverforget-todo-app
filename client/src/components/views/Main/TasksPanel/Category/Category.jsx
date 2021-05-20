import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import style from './Category.module.css';

const Category = ({ children, name, openedByDefault }) => {
  const [isOpen, setIsCollapsed] = useState(!openedByDefault);

  const toggleColapse = () => {
    setIsCollapsed(prev => !prev);
  }

  return (
    <div className={style.container}>
      <div className={style.head} onClick={toggleColapse}>
        <p className={style.name}>{name}</p>
        <div className={`${style.collapseIcon} ${isOpen ? style.open : ''}`} >
          <IoIosArrowForward />
        </div>
      </div>
      {isOpen && <div className={style.content}>
        <div className={style.contentWrapper}>
          {children}
        </div>
      </div>}
    </div>
  )
}

export default Category
