import React from 'react';
import './CourseCard.css'

const CourseCard = () => {
    return (
        <div className="course-card">
            <div className="course-body">
                <p className='title'>Разработчик: старт в ИТ с нуля до Junior</p>
                <p className='description'> Идеальная программа для тех, кто хочет попасть в ИТ, но пока не решил, какую
                    профессию выбрать. Обучение с нуля, выбор профессии в процессе обучения</p>

                <hr/>
                <p>Время обучения: 8 недель</p>
            </div>
        </div>
    );
};

export default CourseCard;