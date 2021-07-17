import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../../../../../../actions/categories";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

import Modal from "../../../../../Modal/Modal";

import style from "./CategoriesCreationModal.module.scss";

const CategoriesCreationModal = ({ handleCloseModal }) => {
  const dispatch = useDispatch();
  const backgroundRef = useRef();
  const handleBackgroundClick = (e) => {
    if (backgroundRef.current === e.target) {
      console.log("closeCategoriesModal");
      handleCloseModal();
    }
  };
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = () => {
    if (categoryName) {
      dispatch(create(categoryName));
      handleCloseModal();
    }
  };

  return (
    <Modal>
      <div
        className={style.modalBackground}
        ref={backgroundRef}
        onClick={handleBackgroundClick}
      >
        <div className={style.modalContainer}>
          <div className={style.modalHead}>
            Create category
            <ModalCloseIcon handleCloseModal={handleCloseModal} />
          </div>
          <div className={style.modalContent}>
            <input
              type="text"
              placeholder="name"
              name="name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <button className={style.confirmBtn} onClick={handleSubmit}>
            <i>
              <FaCheck />
            </i>
            {"Create"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

const ModalCloseIcon = ({ handleCloseModal }) => (
  <div className={style.modalCloseIcon} onClick={handleCloseModal}>
    <MdClose />
  </div>
);

export default CategoriesCreationModal;
