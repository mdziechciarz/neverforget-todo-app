import { useState } from 'react';

import Category from './Category/Category';
import Task from './Task/Task';
import TaskModal from './TaskModal/TaskModal';

import style from './TasksPanel.module.scss';

const TasksPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.categories}>
          <Category name="All" openedByDefault>
            <Task name="Do your homework" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" deadline={Date.now() + 7 * 24 * 60 * 60 * 1000} priority={2} />
            <Task name="Do your homework and make the business calls" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" deadline={Date.now() + 7 * 24 * 60 * 60 * 1000} priority={2} />
            <Task name="Clean the kitchen and take out the rubbish" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" priority={1} />
            <Task name="Take dog for a walk" />
          </Category>
          <Category name="School">
            <Task name="Do your homework" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" deadline={Date.now() + 7 * 24 * 60 * 60 * 1000} priority={2} />
            <Task name="Do your homework and make the business calls" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" deadline={Date.now() + 7 * 24 * 60 * 60 * 1000} priority={2} />
            <Task name="Clean the kitchen and take out the rubbish" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" priority={1} />
            <Task name="Take dog for a walk" />
          </Category>
        </div>
        <div className={style.buttonsContainer}>
          <button className={style.addTaskButton} onClick={handleOpenModal}><span>+</span>Add Task</button>
        </div>
      </div>
      {isModalOpen && <TaskModal setIsModalOpen={setIsModalOpen} />}
    </>
  )
}

export default TasksPanel
