import React from 'react';
import '../assets/css/home.css'
import CourseInfo from "../components/CourseInfo/CourseInfo";
import CourseCarousel from "../components/Slider/CourseCarousel";

const Home = () => {
    return (
        <div className='container'>
           <div className="course-info">
               <CourseInfo/>
           </div>
            <div className="courses-slider row">
               <CourseCarousel/>
            </div>
        </div>
    );
};

export default Home;