import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa'
import Modal from '../../../../../Modal/Modal';
import style from './CategoriesDropdown.module.scss';

import taskData from '../../../../../../data/tasksData';

const CategoriesDropdown = ({ title, options, selectedOption, setOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className={style.wrapper}>
      <div className={`${style.container} ${isOpen && style.open}`}>
        <Head isOpen={isOpen} handleOpen={handleOpen} selectedOption={selectedOption} title={title} />
        {isOpen && <Content options={options} setOption={setOption} setIsOpen={setIsOpen} />}
      </div>
    </div>
  )
}

export default CategoriesDropdown

const Head = ({ isOpen, handleOpen, selectedOption, title }) => (
  <div className={style.head} onClick={handleOpen}>
    <span className={`${style.title} ${selectedOption && style.selected}`}>
      {selectedOption || title}
    </span>
    <span className={style.arrow}>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
  </div>
)

const Content = ({ options, setOption, setIsOpen }) => {
  const handleSelect = (option) => {
    setOption(option);
    setIsOpen(false);
  }

  return (
    <div className={style.content}>
      <ul className={style.elementsList}>
        {options.map((el, i) => (
          <Element key={i} name={el} onClick={() => handleSelect(el)} />
        ))}
      </ul>
      <button className={style.addCategoryBtn}><i><FaPlus /></i>New category</button>
    </div>
  )
}

const Element = ({ name, onClick = () => { } }) => (
  <li className={style.element} onClick={onClick}>{name}</li>
)

