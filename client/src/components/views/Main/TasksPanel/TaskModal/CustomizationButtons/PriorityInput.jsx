import { ReactComponent as PriorityIcon } from '../../../../../../assets/icons/task_priority.svg'
import style from './CustomizationButtons.module.scss';

const PriorityInput = ({ onClick = () => { } }) => {
  return (
    <button
      className={`${style.customizationBtn} ${style.priority}`}
      onClick={onClick}
    >
      <i><PriorityIcon /></i>Priority
    </button >
  )
}

export default PriorityInput;