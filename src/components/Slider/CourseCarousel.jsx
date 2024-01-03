import React from 'react';
// Import Swiper React components
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CourseCard from "../Cards/CourseCard";

const CourseCarousel = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <CourseCard/>
            </SwiperSlide>
            <SwiperSlide>
                <CourseCard/>
            </SwiperSlide>
            <SwiperSlide>
                <CourseCard/>
            </SwiperSlide>
            <SwiperSlide>
                <CourseCard/>
            </SwiperSlide>
            <SwiperSlide>
                <CourseCard/>
            </SwiperSlide>
            <SwiperSlide>
                <CourseCard/>
            </SwiperSlide>
            ...
        </Swiper>
    );
};

export default CourseCarousel;