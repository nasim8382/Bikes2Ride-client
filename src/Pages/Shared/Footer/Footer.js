import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.jpg';
import icon from '../../../images/icon.png';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiYoutube } from "react-icons/si";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='newsletter-section mx-auto'>
                <div className="row">
                    <div className="col-12 col-md-5 col-lg-6">
                        <h2 className='text-center newsletter-title'>Join Our NewsLetter</h2>
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 d-flex align-items-center newsletter-input">
                            <input className='footer-input' type="email" placeholder='Input Your Email' />
                            <button className='all-btn mt-4'>Subscribe Now</button>
                    </div>
                </div>
            </div>

            <div className="container footer-text">
                <div className="row">
                    <div className="col-12 col-md-4 footer-social">
                        <div className='d-flex align-items-center'>
                            <img src={icon} alt="" />
                            <img className='ms-3 footer-logo-image' src={logo} alt="" />
                        </div>
                        <p className='text-white my-4'>We are cycling enthusiasts, fall in love with our city, and tour guides obsessed with showing it.</p>
                        <div className='d-flex mb-4'>
                            <span className='footer-social-icons me-4'> <BsFacebook/> </span>
                            <span className='footer-social-icons me-4'> <BsInstagram/> </span>
                            <span className='footer-social-icons me-4'> <BsTwitter/> </span>
                            <span className='footer-social-icons'> <SiYoutube/> </span>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 text-white ps-5 footer-contact">
                        <h2 className='text-uppercase'>Contact Us</h2>
                        <p><span style={{color: 'rgb(255, 40, 91)'}}>Phone: </span>+ 123 – 456 – 7890</p>
                        <p><span style={{color: 'rgb(255, 40, 91)'}}>Address: </span>2130 Fulton Street San Diego, <br/>
                                CA 94117-1080 USA</p>
                        <p><span style={{color: 'rgb(255, 40, 91)'}}>Mail: </span>info@bikes2ride.org</p>
                    </div>
                    
                    <div className="col-12 col-md-4 text-white footer-services">
                        <h2 className='text-uppercase'>Services</h2>
                        <Link to="/services" className='link-style'>
                            <h6 className='my-3'>Bike Repair</h6>
                        </Link>
                        <Link to="/services" className='link-style'>
                            <h6 className='my-3'>Bike Fitting</h6>
                        </Link>
                        <Link to="/services" className='link-style'>
                            <h6 className='my-3'> Bike Rental</h6>
                        </Link>   
                    </div>
                </div>
            </div>
            <div className='copywrite-text'>
                    <p className='text-center text-white'> &copy;{new Date().getFullYear()} - Bikes<span style={{color: 'rgb(197, 53, 55)'}}>2</span>Ride, All Rights Reserved.</p>
                </div>

        </div>
    );
};

export default Footer;