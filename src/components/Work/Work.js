import React from "react";
import classes from "./Work.module.css";
import Button from "../UI/Button/Button";
import todo from "../../images/TodoList.png";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Work = () => {
  return (
    <div className={classes.container}>
      <h1>My Work</h1>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={classes.slideContainer}
      >
        <SwiperSlide className={classes.slide}>
          <img className={classes.todo} src={todo} alt="Todo List" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img className={classes.todo} src={todo} alt="Todo List" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img className={classes.todo} src={todo} alt="Todo List" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img className={classes.todo} src={todo} alt="Todo List" />
        </SwiperSlide>
      </Swiper>
      <Button>Show me more!</Button>
    </div>
  );
};

export default Work;
