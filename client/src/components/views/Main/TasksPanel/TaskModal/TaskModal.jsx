import React, { useEffect, useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import Modal from '../../../../Modal/Modal';
import CategoriesDropdown from './CategoriesDropdown/CategoriesDropdown';
import DeadlineInput from './CustomizationButtons/DeadlineInput';
import PriorityInput from './CustomizationButtons/PriorityInput';
import TimedInput from './CustomizationButtons/TimedInput';
import HabitInput from './CustomizationButtons/HabitInput';

import style from './TaskModal.module.scss';

import tasksData from '../../../../../data/exampleData';

const TaskModal = ({ editedTask, handleCloseModal, categories }) => {
  const backgroundRef = useRef();

  const handleBackgroundClick = (e) => {
    if (backgroundRef.current === e.target) {
      handleCloseModal();
    }
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    }
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, []);

  const [taskData, setTaskData] = useState(editedTask || {
    title: '',
    category: '',
    description: '',
    deadline: '',
    priority: '',
    timed: '',
    habit: ''
  });

  const handleChange = e => {
    setTaskData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const setCategory = (category) => {
    setTaskData(prev => ({
      ...prev,
      category
    }))
  }

  return (
    <Modal>
      <div className={style.modalBackground} ref={backgroundRef} onClick={handleBackgroundClick}>
        <div className={style.modalContainer}>
          <div className={style.modalHead}>
            {editedTask ? 'Edit task' : 'Create new task'}
            <ModalCloseIcon handleCloseModal={handleCloseModal} />
          </div>
          <div className={style.modalContent}>
            <div className={style.inputs}>

              <input className={style.title} type="text" placeholder="Title" name="title" value={taskData.title} onChange={handleChange} />

              <CategoriesDropdown title="Category" options={categories.map(category => category.name)} selectedOption={taskData.category} setOption={setCategory} />
              <textarea className={style.description} type="text" name="description" placeholder="Description" value={taskData.description} onChange={handleChange} />
            </div>
            <div className={style.customization}>
              <DeadlineInput deadline={taskData.deadline} setTaskData={setTaskData} />
              <PriorityInput />
              <TimedInput />
              <HabitInput />
            </div>
          </div>
          <button className={style.confirmBtn}><i><FaCheck /></i>{editedTask ? 'Save' : 'Create'}</button>
        </div>
      </div>
    </Modal>
  )
}

export default TaskModal;

const ModalCloseIcon = ({ handleCloseModal }) => (
  <div className={style.modalCloseIcon} onClick={handleCloseModal}> <MdClose /></div >
)
