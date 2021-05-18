import { useEffect, useState } from 'react';

import Category from './Category/Category';
import Task from './Task/Task';
import TaskModal from './TaskModal/TaskModal';

import style from './TasksPanel.module.scss';

import exampleData from '../../../../data/exampleData';

const TasksPanel = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const { tasks: { categories: taskCategories } } = exampleData;
    setCategories(Object.values(taskCategories));
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedTask, setEditedTask] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }
  const handleEditTask = (task) => {
    setEditedTask(task);
    setIsModalOpen(true);
  }
  const handleCloseModal = () => {
    setEditedTask(null);
    setIsModalOpen(false);
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.categories}>
          {categories.map(({ name, openedByDefault, tasks }, key) => (
            <Category key={key} name={name} openedByDefault={openedByDefault}>
              {
                tasks.map((task, key) => (
                  <Task
                    key={key}
                    taskData={task}
                    handleEditTask={handleEditTask}
                  />
                ))
              }
            </Category>
          ))}
        </div>
        <div className={style.buttonsContainer}>
          <button className={style.addTaskButton} onClick={handleOpenModal}><span>+</span>Add Task</button>
        </div>
      </div>
      {isModalOpen && <TaskModal
        editedTask={editedTask}
        handleCloseModal={handleCloseModal}
        categories={categories}
        setIsModalOpen={setIsModalOpen}
        setEditedTask={setEditedTask}
      />}
    </>
  )
}

export default TasksPanel
