import React from 'react'
// import { useMediaQuery } from 'react-responsive';

import Category from './Category/Category';
import Task from './Task/Task';

import style from './TasksPanel.module.css';

const TasksPanel = () => {
  // const isTabletOrDesktop = useMediaQuery({
  //   minWidth: 700
  // });

  return (
    <div className={style.container}>
      <Category name="All" openedByDefault>
        <Task name="Make your homework" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" deadline={Date.now() + 7 * 24 * 60 * 60 * 1000} priority={2} />
        <Task name="Make your homework and make the business calls" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" deadline={Date.now() + 7 * 24 * 60 * 60 * 1000} priority={2} />
        <Task name="Clean the kitchen and take out the rubbish" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" priority={1} />
        <Task name="Take dog for a walk" />
      </Category>
      <Category name="School">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </Category>
      <div className={style.buttonsContainer}>
        <button className={style.addTaskButton}><span>+</span>Add Task</button>
      </div>
    </div>
  )
}

export default TasksPanel
