import { MdTimer } from 'react-icons/md';
import style from './CustomizationButtons.module.scss';

const TimedInput = ({ onClick = () => { } }) => {
  return (
    <button
      className={`${style.customizationBtn} ${style.timed}`}
      onClick={onClick}
    >
      <i><MdTimer /></i>Priority
    </button >
  )
}

export default TimedInput;