import React from 'react';
import Typewriter from 'typewriter-effect';
import './Services.css';
import service1 from '../../images/services/repair.jpg';
import service2 from '../../images/services/fitting.jpg';
import service3 from '../../images/services/rental.jpg';
import { Link } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Services = () => {
    return (
        <div className='container'>
            <PageTitle title="Services"></PageTitle>
            <div className='d-flex align-items-center justify-content-center my-5'>
                <div className='straight-line'></div>
                <h1 className='section-header-title'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Our Bike Services").start();
                        }}
                    />
                </h1>
            </div>

            <div className='row service-section  service-section-first'>
                <div className="col-12 col-md-6 services-img">
                    <img className='img-fluid w-100 img-hover' src={service1} alt="" />
                </div>
                <div className="col-12 col-md-6 my-auto">
                    <div className='d-flex align-items-center my-5 history-title'>
                        <div className='straight-line'></div>
                        <h1 className='section-header-title'>Bike Repair</h1>
                    </div>
                    <p>We offer a unique oportunity to make the city a cleaner and more pleasant place. On the basis of the Public Bike partner program, hotels, museums, businesses, festivals and events agencies can make one of our bicycles available to their customers and staff.</p>
                    <Link to="/contact" className='link-style'>
                        <button className='all-btn d-block mx-auto mt-5'>Contact Us</button>
                    </Link>
                </div>
            </div>

            <div className='row service-section service-section-second'>
                <div className="col-12 col-md-6 my-auto">
                    <div className='d-flex align-items-center my-5 history-title'>
                        <div className='straight-line'></div>
                        <h1 className='section-header-title'>Bike Fitting</h1>
                    </div>
                    <p>Tourists who want to cycle with a guide can join a daily bike ride through the most renowned cities, organized by our guides. They will show the most spectacular and breathtaking sights, and give historical and recent information about the city and beyond.</p>
                    <Link to="/contact" className='link-style'>
                        <button className='all-btn d-block mx-auto mt-5'>Contact Us</button>
                    </Link>
                </div>
                <div className="col-12 col-md-6 services-img">
                    <img className='img-fluid w-100 img-hover' src={service2} alt="" />
                </div>
            </div>

            <div className='row service-section service-section-third'>
                <div className="col-12 col-md-6 services-img">
                    <img className='img-fluid w-100 img-hover' src={service3} alt="" />
                </div>
                <div className="col-12 col-md-6 my-auto">
                    <div className='d-flex align-items-center my-5 history-title'>
                        <div className='straight-line'></div>
                        <h1 className='section-header-title'>Bike Rental</h1>
                    </div>
                    <p>We offer bike rentals so you can ride the famous American bicycle trails or roll across your favorite sandy shores, such as Wrightsville Beach and Figure Eight Island. We’ll even deliver and pick up your rental bikes, so you can spend more time cruising!</p>
                    <Link to="/contact" className='link-style'>
                        <button className='all-btn d-block mx-auto mt-5'>Contact Us</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;