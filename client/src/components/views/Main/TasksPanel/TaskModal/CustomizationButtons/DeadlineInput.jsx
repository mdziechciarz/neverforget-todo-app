import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { FiCalendar } from 'react-icons/fi'

import "react-datepicker/dist/react-datepicker.css";
import style from './CustomizationButtons.module.scss';
import './CustomDatePicker.scss';

const DeadlineInput = ({ deadline, setTaskData }) => {
  return (
    <DatePicker
      isClearable={deadline ? true : false}
      clearButtonClassName={style.datePickerClearButton}
      selected={deadline}
      onChange={date => setTaskData(prev => ({ ...prev, deadline: date }))}
      // wrapperClassName={style.datePickerWrapper}
      wrapperClassName="taskDeadlinePicker"
      customInput={deadline ? <SelectedCustomInput deadline={deadline} setTaskData={setTaskData} /> :
        <UnselectedCustomInput />}
    />
  )
}

export default DeadlineInput;


const UnselectedCustomInput = forwardRef(
  ({ value, onClick }, ref) => (
    <button
      className={`${style.customizationBtn} ${style.deadline}`}
      onClick={onClick}
      ref={ref}
    >
      <i><FiCalendar /></i>Deadline
    </button >
  )
)
const SelectedCustomInput = forwardRef(
  ({ value, onClick, deadline, setTaskData }, ref) => (
    <button
      className={`${style.customizationBtn} ${style.deadline} ${style.selected}`}
      onClick={onClick}
      ref={ref}
    >
      {/* <i><FiCalendar /></i>{deadline.toLocaleDateString()}<i onClick={() => setTaskData('')}><AiFillCloseCircle /></i> */}
      <i><FiCalendar /></i>{deadline.toLocaleDateString()}
    </button >
  )
)