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

import tasksData from '../../../../../data/tasksData';

const TaskModal = ({ setIsModalOpen }) => {
  const backgroundRef = useRef();

  const handleBackgroundClick = (e) => {
    if (backgroundRef.current === e.target) {
      setIsModalOpen(false);
    }
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, []);

  const [taskData, setTaskData] = useState({
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
      <div className={style.modalBackground} onClick={handleBackgroundClick} ref={backgroundRef}>
        <div className={style.modalContainer}>
          <div className={style.modalHead}>
            {'Create new task'}
            <ModalCloseIcon setIsModalOpen={setIsModalOpen} />
          </div>
          <div className={style.modalContent}>
            <div className={style.inputs}>

              <input className={style.title} type="text" placeholder="Title" name="title" value={taskData.title} onChange={handleChange} />

              <CategoriesDropdown title="Category" options={tasksData.categories} selectedOption={taskData.category} setOption={setCategory} />
              <textarea className={style.description} type="text" name="description" placeholder="Description" value={taskData.description} onChange={handleChange} />
            </div>
            <div className={style.customization}>
              <DeadlineInput deadline={taskData.deadline} setTaskData={setTaskData} />
              <PriorityInput />
              <TimedInput />
              <HabitInput />
            </div>
          </div>
          <button className={style.confirmBtn}><i><FaCheck /></i>Confirm</button>
        </div>
      </div>
    </Modal>
  )
}

export default TaskModal;

const ModalCloseIcon = ({ setIsModalOpen }) => (
  <div className={style.modalCloseIcon} onClick={() => setIsModalOpen(false)}><MdClose /></div>
)
