import React from 'react';

const CourseInfo = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="col-12 info-box">
                <div>
                    <p className='teacher-name'>educator h1x0ver</p>
                </div>
                <h1 className='course-title'>Front-End Developer from 0 to Junior</h1>
                <div className="course-info-box">
                    <p>
                        Read JavaScript Software Engineer Training. You will gain basic algorithmic knowledge using
                        your JavaScript language and will be able to create web, mobile and desktop applications.
                        After 9 months of training you will be able to find a job. With the Master package, you can
                        delve deeper into your technology specialization with expert support.</p>
                </div>
                <div className="course-time-info">
                    <span>Duration of training: </span>
                    from 24 months
                </div>
                <div className="price-info">
                    <span>from 180$</span>/month
                </div>

                <hr/>

                <div className="benefits">
                    <div className="row">
                        <div className="col-3 banefit">
                            <img src="https://gb.ru/channels/programs/images/promo/education.png" alt=""/>
                            <span>Diploma in professional retraining</span>
                        </div>

                        <div className="col-3 banefit">
                            <img src="https://gb.ru/channels/programs/images/promo/100.png" alt=""/>
                            <span>Guarantee employment in 9 months</span>
                        </div>

                        <div className="col-3 banefit">
                            <img src="https://gb.ru/channels/programs/images/promo/list.png" alt=""/>
                            <span>State educational license</span>
                        </div>

                        <div className="col-3 banefit">
                            <img src="https://gb.ru/channels/programs/images/promo/ddiamand.png" alt=""/>
                            <span>In demand profession</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseInfo;