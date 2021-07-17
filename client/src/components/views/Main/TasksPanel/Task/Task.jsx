import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { remove } from '../../../../../actions/tasks';
import { IoIosArrowForward } from 'react-icons/io';

import PrimaryIcon from './PrimaryIcon';
import PopupMenu from './PopupMenu/PopupMenu';

import style from './Task.module.scss';

const Task = ({ task, handleEditTask }) => {
  const dispatch = useDispatch()
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
  const handleDeleteTask = (taskId) => {
    dispatch(remove(taskId));
  }

  return (
    <div className={style.container}>
      <div className={style.head}>
        <div className={style.primaryIconContainer} onClick={toggleDone}>
          <PrimaryIcon isDone={isDone} />
        </div>
        <p className={style.name} onClick={toggleOpen}>{task.title}</p>
        {isTabletOrDesktop &&
          <div className={style.deadlineAndCategory}>
            {task.deadline && <div className={style.deadline}>Due {new Date(task.deadline).toLocaleDateString()}</div>}
            {task.priority !== 0 && <Priority priority={task.priority} />}
          </div>}
        {isTabletOrDesktop ? (
          <PopupMenu
            handleEditTask={() => handleEditTask(task._id)}
            handleDeleteTask={() => handleDeleteTask(task._id)}
          />
        ) : (
          isOpen ? (
            <div className={style.collapseIcon} onClick={toggleOpen} > <IoIosArrowForward /></div>
          ) : (
            <PopupMenu handleEditTask={
              () => handleEditTask(task._id)
            } />
          )
        )}
      </div>
      {
        isTabletOrDesktop ? (
          <div className={style.content}>
            {task.description && <div className={style.description}>{task.description}</div>}
          </div>
        ) : (
          !isOpen && <div className={style.content}>
            {task.description && <div className={style.description}>{task.description}</div>}
            <div className={style.details}>
              {task.deadline && <div className={style.deadline}>Due {new Date(task.deadline).toLocaleDateString()}</div>}
              {task.priority !== 0 && <Priority priority={task.priority} />}
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
