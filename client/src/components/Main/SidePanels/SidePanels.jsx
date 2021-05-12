import TimerPanel from './TimerPanel/TimerPanel';

import style from './SidePanels.module.scss';

const SidePanels = () => {
  return (
    <div className={style.container}>
      <TimerPanel />
      <TimerPanel />
    </div>
  )
}

export default SidePanels;
