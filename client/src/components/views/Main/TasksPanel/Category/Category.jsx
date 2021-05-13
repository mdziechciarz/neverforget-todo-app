import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

import style from './Category.module.css';

const Category = ({ children, name, openedByDefault }) => {
  const [isCollapsed, setIsCollapsed] = useState(!openedByDefault);

  const toggleColapse = () => {
    setIsCollapsed(prev => !prev);
  }

  return (
    <div className={style.container}>
      <div className={style.head}>
        <p className={style.name}>{name}</p>
        <div className={style.collapseIcon} onClick={toggleColapse}>
          {isCollapsed ? <IoIosArrowForward /> : <IoIosArrowDown />}
        </div>
      </div>
      {!isCollapsed && <div className={style.content}>{children}</div>}
    </div>
  )
}

export default Category
