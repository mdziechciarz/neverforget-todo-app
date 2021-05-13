import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { useMediaQuery } from 'react-responsive';
import TasksPanel from './TasksPanel/TasksPanel';
import SidePanels from './SidePanels/SidePanels';
import TimerPanel from './SidePanels/TimerPanel/TimerPanel';

import Navbar from '../../Navbar/Navbar';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import './customSwiper.scss'
import style from './Main.module.scss';

SwiperCore.use(Pagination)

const Main = () => {
  const isMobile = useMediaQuery({
    maxWidth: 767
  })

  if (isMobile)
    return (
      <>
        <Navbar />
        <div className={style.container}>
          <Swiper className={style.slider} slidesPerView={1} spaceBetween={100} pagination={{ clickable: true }}>
            <SwiperSlide>
              <TasksPanel />
            </SwiperSlide>
            <SwiperSlide>
              <TimerPanel />
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    )
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <TasksPanel />
        <SidePanels />
      </div>
    </>
  )

}

export default Main;
