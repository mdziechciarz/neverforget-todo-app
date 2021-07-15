import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa'
import style from './CategoriesDropdown.module.scss';

const CategoriesDropdown = ({ title, options, selectedOption, selectOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className={style.wrapper}>
      <div className={`${style.container} ${isOpen && style.open}`}>
        <Head isOpen={isOpen} handleOpen={handleOpen} selectedOption={selectedOption} title={title} />
        {isOpen && <Content options={options} setOption={selectOption} setIsOpen={setIsOpen} />}
      </div>
    </div>
  )
}

export default CategoriesDropdown

const Head = ({ isOpen, handleOpen, selectedOption, title }) => {
  console.log(selectedOption);
  return (
    <div className={style.head} onClick={handleOpen}>
      <span className={`${style.title} ${selectedOption && style.selected}`}>
        {selectedOption?.name || title}
      </span>
      <span className={style.arrow}>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
    </div>
  )
}

const Content = ({ options, setOption, setIsOpen }) => {
  const handleSelect = (option) => {
    setOption(option);
    setIsOpen(false);
  }

  return (
    <div className={style.content}>
      <ul className={style.elementsList}>
        {options.map((option, i) => (
          <Element key={option._id} name={option.name} onClick={() => handleSelect(option)} />
        ))}
      </ul>
      <button className={style.addCategoryBtn}><i><FaPlus /></i>New category</button>
    </div>
  )
}

const Element = ({ name, onClick = () => { } }) => (
  <li className={style.element} onClick={onClick}>{name}</li>
)

