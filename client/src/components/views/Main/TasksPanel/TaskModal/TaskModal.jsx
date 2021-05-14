import { useEffect, useRef } from 'react';
import Modal from '../../../../Modal/Modal';
import { MdClose } from 'react-icons/md';
import { FiCalendar } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';

import style from './TaskModal.module.scss';

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
              <input className={style.title} type="text" placeholder="Title" />
              <input className={style.category} type="text" placeholder="Title" />
              <textarea className={style.description} type="text" placeholder="Description" />
            </div>
            <div className={style.customization}>
              <CustomizationButton className={style.deadline} name="Deadline" icon={<FiCalendar />} />
              <CustomizationButton className={style.priority} name="Priority" icon={<FiCalendar />} />
              <CustomizationButton className={style.timed} name="Timed" icon={<FiCalendar />} />
              <CustomizationButton className={style.habit} name="Habit" icon={<FiCalendar />} />
            </div>
          </div>
          <button className={style.confirmBtn}><i><FaCheck /></i>Confirm</button>
        </div>
      </div>
    </Modal>
  )
}

export default TaskModal;

const CustomizationButton = ({ className, name, icon, }) => {
  return (
    <button
      className={`${style.customizationBtn} ${className}`}
    >
      {icon && <i>{icon}</i>}{name}
    </button >
  )
}

const ModalCloseIcon = ({ setIsModalOpen }) => (
  <div className={style.modalCloseIcon} onClick={() => setIsModalOpen(false)}><MdClose /></div>
)
