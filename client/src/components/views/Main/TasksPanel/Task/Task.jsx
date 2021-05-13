import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { IoIosArrowDown, IoIosArrowForward, IoMdMore } from 'react-icons/io';

import PrimaryIcon from './PrimaryIcon';

import style from './Task.module.css';

const Priority = ({ priority }) => {
  switch (priority) {
    case 1:
      return (
        <div className={style.priority} style={{ color: 'orange' }}>Important</div>
      )
    case 2:
      return (
        <div className={style.priority} style={{ color: '#D46D6D' }}>Very Important</div>
      )
    default:
      return (
        <div className={style.priority}>Regular</div>
      )

  }
}


const Task = ({ name, description, deadline, priority = 0 }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const isTabletOrDesktop = useMediaQuery({
    minWidth: 700
  });

  const toggleColapse = () => {
    setIsCollapsed(prev => !prev);
  }
  const toggleDone = () => {
    setIsDone(prev => !prev);
  }

  return (
    <div className={style.container}>
      <div className={style.head}>
        <div className={style.primaryIconContainer} onClick={toggleDone}>
          <PrimaryIcon isDone={isDone} />
        </div>
        <p className={style.name} onClick={toggleColapse}>{name}</p>
        {isTabletOrDesktop &&
          <div className={style.deadlineAndCategory}>
            {deadline && <div className={style.deadline}>Due {new Date(deadline).toLocaleDateString()}</div>}
            {priority !== 0 && <Priority priority={priority} />}
          </div>}
        {isTabletOrDesktop ? (
          <div className={style.collapseIcon}><IoMdMore /></div>
        ) : (
          <div className={style.collapseIcon} onClick={toggleColapse}>
            {isCollapsed ? <IoIosArrowForward /> : <IoIosArrowDown />}
          </div>
        )}
      </div>
      {
        isTabletOrDesktop ? (
          <div className={style.content}>
            {description && <div className={style.description}>{description}</div>}
          </div>
        ) : (
          !isCollapsed && <div className={style.content}>
            {description && <div className={style.description}>{description}</div>}
            <div className={style.details}>
              {deadline && <div className={style.deadline}>Due {new Date(deadline).toLocaleDateString()}</div>}
              {priority !== 0 && <Priority priority={priority} />}
            </div>
          </div>
        )}
    </div >
  )
}

export default Task;
