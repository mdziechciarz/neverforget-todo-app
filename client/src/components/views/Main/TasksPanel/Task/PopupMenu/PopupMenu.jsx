import { useState } from 'react'
import outsideClickListenerRef from '../../../../../../hooks/useOutsideClickListenerRef';
import { MdClose } from 'react-icons/md';
import { IoMdMore } from 'react-icons/io'
import style from './PopupMenu.module.scss';

const PopupMenu = ({ handleEditTask }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (e) => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className={style.container}>
      <div className={style.icon} onClick={toggleOpen}><IoMdMore /></div>
      {isOpen && <Content setIsOpen={setIsOpen} handleEditTask={handleEditTask} />}
    </div>
  )
}

export default PopupMenu

const Content = ({ setIsOpen, handleEditTask }) => {
  const ref = outsideClickListenerRef(() => setIsOpen(false));

  return (
    <div className={style.popup} ref={ref}>
      <div className={style.closeIcon} onClick={() => setIsOpen(false)}><MdClose /></div>
      <ul className={style.list}>
        <li className={style.element} onClick={() => {
          handleEditTask();
          setIsOpen(false);
        }}>Edit</li>
        <li className={style.element}>Delete</li>
      </ul>
    </div>
  )
}