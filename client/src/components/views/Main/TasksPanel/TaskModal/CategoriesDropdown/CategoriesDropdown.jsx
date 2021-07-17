import { useState } from "react";
import { useSelector } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import CategoriesCreationModal from "./CategoriesCreationModal";
import style from "./CategoriesDropdown.module.scss";

const CategoriesDropdown = ({ selectedCategoryId, selectCategoryId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);
  const categories = useSelector((state) => state.categories);
  const selectedCategory = categories.find(
    (category) => category._id === selectedCategoryId
  );
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={style.wrapper}>
        <div className={`${style.container} ${isOpen && style.open}`}>
          <Head
            isOpen={isOpen}
            handleOpen={handleOpen}
            selectedCategory={selectedCategory}
          />
          {isOpen && (
            <Content
              categories={categories}
              selectCategoryId={selectCategoryId}
              setIsOpen={setIsOpen}
              handleCreateCategory={() => setIsCreationModalOpen(true)}
            />
          )}
        </div>
      </div>
      {isCreationModalOpen && (
        <CategoriesCreationModal
          handleCloseModal={() => setIsCreationModalOpen(false)}
        />
      )}
    </>
  );
};

export default CategoriesDropdown;

const Head = ({ isOpen, handleOpen, selectedCategory }) => {
  // console.log(selectedCategory);
  return (
    <div className={style.head} onClick={handleOpen}>
      <span className={`${style.title} ${selectedCategory && style.selected}`}>
        {selectedCategory?.name || "Category"}
      </span>
      <span className={style.arrow}>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </span>
    </div>
  );
};

const Content = ({
  categories,
  selectCategoryId,
  setIsOpen,
  handleCreateCategory,
}) => {
  const handleSelect = (category) => {
    console.log(category);
    selectCategoryId(category._id);
    setIsOpen(false);
  };
  return (
    <div className={style.content}>
      <ul className={style.elementsList}>
        {categories.map((category) => (
          // <Element key={category._id} name={category.name} onClick={() => handleSelect(category)} />
          <li
            key={category._id}
            className={style.element}
            onClick={() => handleSelect(category)}
          >
            {category.name}
          </li>
        ))}
      </ul>
      <button className={style.addCategoryBtn} onClick={handleCreateCategory}>
        <i>
          <FaPlus />
        </i>
        New category
      </button>
    </div>
  );
};

// const Element = ({ name, onClick = () => { } }) => (
//   <li className={style.element} onClick={onClick}>{name}</li>
// )
