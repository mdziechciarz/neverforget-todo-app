import { BiLink } from 'react-icons/bi';
import style from './CustomizationButtons.module.scss';

const HabitInput = ({ onClick = () => { } }) => {
  return (
    <button
      className={`${style.customizationBtn} ${style.habit}`}
      onClick={onClick}
    >
      <i><BiLink /></i>Habit
    </button >
  )
}

export default HabitInput;
