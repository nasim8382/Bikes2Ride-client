import React from 'react';
import './Advantages.css';
import cycle from '../../../images/home-cycle.png';
import { AiOutlinePercentage } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import { BsBicycle } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const Advantages = () => {
    return (
        <div className='advantages-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <img className='img-fluid py-5' src={cycle} alt="" />
                    </div>
                    <div className="col-12 col-lg-6 my-auto advantage-text">
                        <div className='d-flex align-items-center mb-3 advantage-header'>
                            <div className='straight-line'></div>
                            <h1 className='advantage-header-title'>
                                Why Bikes<span style={{color: 'rgb(197, 53, 55)'}}>2</span>Ride
                            </h1>
                        </div>
                        <div className='row'>
                            <div className="col-12 col-md-6">
                                <span className='advantage-icons'>
                                    <AiOutlinePercentage/>
                                </span>
                                <h3>Low Prices</h3>
                                <p>We provide affordable prices for buying bikes.</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <span className='advantage-icons'>
                                    <BsBicycle/>
                                </span>
                                <h3>New Bicycles</h3>
                                <p>We stock new bicycles for your comfort.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <span className='advantage-icons'>
                                    <RiMessage2Line/>
                                </span>
                                <h3>Good Support</h3>
                                <p>Pick up and return bicycle at our spot easily.</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <span className='advantage-icons'>
                                    <MdLocationOn/>
                                </span>
                                <h3>Convenient Location</h3>
                                <p>Our main station is located in the center of the city.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;