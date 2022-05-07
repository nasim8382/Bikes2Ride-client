import React from 'react';
import Typewriter from 'typewriter-effect';
import mission from '../../images/about/mission.png';
import history from '../../images/about/history.png';
import testimonial1 from '../../images/testimonials/testimonials1.jpg';
import testimonial2 from '../../images/testimonials/testimonials2.jpg';
import testimonial3 from '../../images/testimonials/testimonials3.jpg';

import './About.css';
import PageTitle from '../Shared/PageTitle/PageTitle';

const About = () => {
    return (
        <div className='about-section'>
            <PageTitle title="About"></PageTitle>
            <div className='d-flex align-items-center justify-content-center my-5'>
                <div className='straight-line'></div>
                <h1 className='section-header-title'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Know About Us").start();
                        }}
                    />
                </h1>
            </div>

            <div className='container mission-section'>
                <div className="row mission-div">
                    <div className="col-12 col-lg-6">
                        <div className='d-flex align-items-center mb-3'>
                            <div className='straight-line'></div>
                            <h1 className='section-header-title'>Our Mission</h1>
                        </div>
                        <p className='text-secondary'>We’re a bike shop, a family and a team of riders, helping folks in New York explore their passion for cycling. Biking is more than transportation or exercise, it’s a lifestyle. Whether you need help with where to ride or are in need.</p>
                        <div className='d-flex align-items-center justify-content-between progress-text'>
                            <h4>Reduced anxiety and depression</h4>
                            <h5>80%</h5>
                        </div>
                        <div className='progress-bar'>
                            <div className='percentage-width progress-one'></div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between progress-text'>
                            <h4>Decreased body fat levels</h4>
                            <h5>96%</h5>
                        </div>
                        <div className='progress-bar'>
                            <div className='percentage-width progress-two'></div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between progress-text'>
                            <h4>Increased cardiovascular fitness</h4>
                            <h5>92%</h5>
                        </div>
                        <div className='progress-bar'>
                            <div className='percentage-width progress-three'></div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img className='img-fluid img-hover mission-img' src={mission} alt="" />
                    </div>
                </div>
            </div>

            <div className='row history-section'>
                <div className="col-12 col-lg-6">
                    <img className='img-fluid' src={history} alt="" />
                </div>
                <div className="col-12 col-lg-6 my-auto ps-5">
                    <div className='d-flex align-items-center my-5 history-title'>
                        <div className='straight-line'></div>
                        <h1 className='history-header-title'>Our History</h1>
                    </div>
                    <p className='history-text'>Bikes<span style={{color: 'rgb(197, 53, 55)'}}>2</span>Ride was founded by Dan Newman and Mary Flumbergen in 1981. New York was already one of the leaders of cycling cities, however, no one gave visitors the opportunity to discover New York by bike. Soon, Newman and Flumbergen opened their first branch in the old bicycle factory. They also wanted to fulfil a function to the locals. So, apart from rental they also offered their services to repair bikes.</p>
                </div>
            </div>

            <div className="container">
                <div className='d-flex align-items-center justify-content-center mb-5'>
                    <div className='straight-line'></div>
                    <h1 className='section-header-title'>Testimonials</h1>
                </div>
                <div className="row testimonials-section">
                    <div className="col-12 col-md-4 testimonial-div">
                        <img className='img-fluid img-hover d-block mx-auto' src={testimonial1} alt="" />
                        <h4 className='text-center my-3'>ALI BONFIRE</h4>
                        <p>« Mountain bikes or road bikes? I like to ride both types of bicycles. This is why I love renting miscellaneous bike models at this place! It was an unforgettable experience for me. But what I really liked was a service provided by Bikes2Ride….»</p>
                    </div>
                    <div className="col-12 col-md-4 testimonial-div">
                        <img className='img-fluid img-hover d-block mx-auto' src={testimonial2} alt="" />
                        <h4 className='text-center my-3'>STEVEN HAWKING</h4>
                        <p>« Me and my extended family, 7 total, rented bikes from this place during our visit in June 2015. Rent a Bike was excellent, they were friendly and very informative, and they also gave us a run-down of the trail…»</p>
                    </div>
                    <div className="col-12 col-md-4 testimonial-div">
                        <img className='img-fluid img-hover d-block mx-auto' src={testimonial3} alt="" />
                        <h4 className='text-center my-3'>GERALD CUTLER</h4>
                        <p>« With a lot of live DJ events that our team does every single night of the year and the locations spanning across the whole country, we were in a dire need for good live streaming management. This was made possible…»</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;