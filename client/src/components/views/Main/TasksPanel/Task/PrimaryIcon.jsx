import { FaCheck } from 'react-icons/fa';

import style from './PrimaryIcon.module.css';

const PrimaryIcon = ({ isDone = false }) => {

  if (isDone) {
    return (
      <div className={`${style.primaryIcon} ${style.done}`}>
        <FaCheck />
      </div>
    )
  } else {
    return (
      <div className={style.primaryIcon}></div>
    )
  }
}

export default PrimaryIcon;
