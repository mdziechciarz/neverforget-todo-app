import { createContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as task from '../../../../actions/tasks';
import * as category from '../../../../actions/categories';
import Category from './Category/Category';
import Task from './Task/Task';
import TaskModal from './TaskModal/TaskModal';

import style from './TasksPanel.module.scss';

import exampleData from '../../../../data/exampleData';

export const TaskCategoriesContext = createContext();

const TasksPanel = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const categories = useSelector(state => state.categories);

  // const [taskCategories, setTaskCategories] = useState([]);

  // useEffect(() => {
  //   const { tasks: { categories: taskCategories } } = exampleData;
  //   setTaskCategories(Object.values(taskCategories));
  // }, []);

  useEffect(() => {
    dispatch(task.getAll());
    dispatch(category.getAll());
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedTask, setEditedTask] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }
  const handleCloseModal = () => {
    setEditedTask(null);
    setIsModalOpen(false);
  }
  const handleCreateTask = () => {
    setEditedTask(null);
    handleOpenModal();
  }
  const handleEditTask = (taskId) => {
    const editedTask = tasks.find(task => task._id === taskId)
    setEditedTask(editedTask);
    setIsModalOpen(true);
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.categories}>
          {categories.map(category => (
            <Category key={category._id} name={category.name} openedByDefault={false}>
              {
                tasks.filter(task => category._id === task.category_id).map((task) => (
                  <Task
                    key={task._id}
                    task={task}
                    handleEditTask={handleEditTask}
                  />
                ))
              }
            </Category>
          ))}
        </div>
        <div className={style.buttonsContainer}>
          <button className={style.addTaskButton} onClick={handleCreateTask}><span>+</span>Add Task</button>
        </div>
      </div>
      {isModalOpen && <TaskModal
        editedTask={editedTask}
        handleCloseModal={handleCloseModal}
        setEditedTask={setEditedTask}
      />}
    </>
  )
}

export default TasksPanel
