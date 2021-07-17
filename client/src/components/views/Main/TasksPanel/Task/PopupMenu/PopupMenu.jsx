import { useState } from 'react'
import outsideClickListenerRef from '../../../../../../hooks/useOutsideClickListenerRef';
import { MdClose } from 'react-icons/md';
import { IoMdMore } from 'react-icons/io'
import style from './PopupMenu.module.scss';

const PopupMenu = ({ handleEditTask, handleDeleteTask }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (e) => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className={style.container}>
      <div className={style.icon} onClick={toggleOpen}><IoMdMore /></div>
      {isOpen && <Content setIsOpen={setIsOpen} handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} />}
    </div>
  )
}

export default PopupMenu

const Content = ({ setIsOpen, handleEditTask, handleDeleteTask }) => {
  const ref = outsideClickListenerRef(() => setIsOpen(false));

  return (
    <div className={style.popup} ref={ref}>
      <div className={style.closeIcon} onClick={() => setIsOpen(false)}><MdClose /></div>
      <ul className={style.list}>
        <li className={style.element} onClick={() => {
          handleEditTask();
          setIsOpen(false);
        }}>Edit</li>
        <li className={style.element} onClick={handleDeleteTask}>Delete</li>
      </ul>
    </div>
  )
}