import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { IoIosArrowForward } from 'react-icons/io';

import PrimaryIcon from './PrimaryIcon';
import PopupMenu from './PopupMenu/PopupMenu';

import style from './Task.module.scss';

const Task = ({ taskData: { title, category, description, deadline, priority = 0, tracked, habit }, handleEditTask }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const isTabletOrDesktop = useMediaQuery({
    minWidth: 700
  });

  const toggleOpen = () => {
    setIsOpen(prev => !prev);
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
        <p className={style.name} onClick={toggleOpen}>{title}</p>
        {isTabletOrDesktop &&
          <div className={style.deadlineAndCategory}>
            {deadline && <div className={style.deadline}>Due {new Date(deadline).toLocaleDateString()}</div>}
            {priority !== 0 && <Priority priority={priority} />}
          </div>}
        {isTabletOrDesktop ? (
          <PopupMenu handleEditTask={
            () => handleEditTask({ title, category, description, deadline, priority, tracked, habit })
          } />
        ) : (
          isOpen ? (
            <div className={style.collapseIcon} onClick={toggleOpen} > <IoIosArrowForward /></div>
          ) : (
            <PopupMenu handleEditTask={
              () => handleEditTask({ title, category, description, deadline, priority, tracked, habit })
            } />
          )
        )}
      </div>
      {
        isTabletOrDesktop ? (
          <div className={style.content}>
            {description && <div className={style.description}>{description}</div>}
          </div>
        ) : (
          !isOpen && <div className={style.content}>
            {description && <div className={style.description}>{description}</div>}
            <div className={style.details}>
              {deadline && <div className={style.deadline}>Due {new Date(deadline).toLocaleDateString()}</div>}
              {priority !== 0 && <Priority priority={priority} />}
            </div>
          </div>
        )
      }
    </div >
  )
}

export default Task;

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
      return null;

  }
}
