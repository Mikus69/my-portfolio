import React from "react";
import classes from "./What.module.css";
import Button from "../UI/Button/Button";
import reactLogo from "../../images/React.png";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const What = () => {
  return (
    <div className={classes.container}>
      <h1>What I do?</h1>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={classes.slideContainer}
      >
        <SwiperSlide className={classes.slide}>
          <img src={reactLogo} alt="react_logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={reactLogo} alt="react_logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={reactLogo} alt="react_logo" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={reactLogo} alt="react_logo" />
        </SwiperSlide>
      </Swiper>

      <Button>See All!</Button>
    </div>
  );
};

export default What;
