import React from 'react';

import TasksPanel from './TasksPanel/TasksPanel';

import style from './Main.module.css';

const Main = () => {
  return (
    <div className={style.container}>
      <TasksPanel />
    </div>
  )
}

export default Main;
