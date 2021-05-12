import React from 'react'

import customCategories from '../../assets/illustrations/custom_categories.png';
import dataProtection from '../../assets/illustrations/data_protection.png';
import notifications from '../../assets/illustrations/notifications.png';
import personalStatistics from '../../assets/illustrations/personal_statistics.png';
import realTimeSync from '../../assets/illustrations/real_time_sync.png';
import taskPriorities from '../../assets/illustrations/task_priorities.png';

import style from './InfoSection.module.css';

const InfoSection = () => {
  return (
    <section className={style.infoSection}>
      <div className={style.info}>
        <p className={style.logo}>Never<span>Forget</span></p>
        <p className={style.description}>
          NeverForget is a simple todo app to designed to help you increase your productivity and achieve your goals.
        </p>
      </div>
      <div className={style.graphics}>
        {/* <div className={style.wrapper}> */}
        <div className={style.container}>
          <img className={style.img} src={personalStatistics} alt="Personal Statistics" />
          <p className={style.title}>Personal Statistics</p>
        </div>
        <div className={style.container}>
          <img className={style.img} src={taskPriorities} alt="Task Priorities" />
          <p className={style.title}>Task Priorities</p>
        </div>
        <div className={style.container}>
          <img className={style.img} src={customCategories} alt="Custom Categories" />
          <p className={style.title}>Custom Categories</p>
        </div>
        <div className={style.container}>
          <img className={style.img} src={notifications} alt="Notifications" />
          <p className={style.title}>Notifications</p>
        </div>
        <div className={style.container}>
          <img className={style.img} src={realTimeSync} alt="Real Time Sync" />
          <p className={style.title}>Real Time Sync</p>
        </div>
        <div className={style.container}>
          <img className={style.img} src={dataProtection} alt="Data Protection" />
          <p className={style.title}>Data Protection</p>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}
export default InfoSection
