import React from 'react';
import Typewriter from 'typewriter-effect';
import './Contact.css';
import contactImage from '../../images/contact.jpg';
import { SiTimescale } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiYoutube } from "react-icons/si";
import PageTitle from '../Shared/PageTitle/PageTitle';

const Contact = () => {
    return (
        <div>
            <PageTitle title="Contact"></PageTitle>
            <div className='d-flex align-items-center justify-content-center my-5'>
                <div className='straight-line'></div>
                <h1 className='section-header-title'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Contact Us").start();
                        }}
                    />
                </h1>
            </div>
            <div className="container contact-section">
                <div className="row">
                    <div className="col-12 col-lg-8 my-auto">
                        <img className='img-fluid' src={contactImage} alt="" />
                    </div>
                    <div className="col-12 col-lg-4 contact-text">
                        <div className='d-flex align-items-center my-4 contact-header'>
                            <div className='straight-line'></div>
                            <h1 className='section-header-title'>Get In Touch</h1>
                        </div>

                        <h3>Socials</h3>
                        <div className='contact-full-line'>
                            <div className='contact-half-line'></div>
                        </div>
                        <div className='d-flex mb-4'>
                            <span className='contact-icons contact-social-icons me-4'> <BsFacebook/> </span>
                            <span className='contact-icons contact-social-icons me-4'> <BsInstagram/> </span>
                            <span className='contact-icons contact-social-icons me-4'> <BsTwitter/> </span>
                            <span className='contact-icons contact-social-icons'> <SiYoutube/> </span>
                        </div>

                        <h3>Phones</h3>
                        <div className='contact-full-line'>
                            <div className='contact-half-line'></div>
                        </div>
                        <div className='d-flex mb-4'>
                            <span className='contact-icons'> <FaPhoneAlt/> </span>
                            <p>1-800-1234-567,  1-800-6547-321</p>
                        </div>

                        <h3>E-mail</h3>
                        <div className='contact-full-line'>
                            <div className='contact-half-line'></div>
                        </div>
                        <div className='d-flex align-items-center mb-4'>
                            <span className='contact-icons'> <HiOutlineMail/> </span>
                            <p>info@bikes2ride.org</p>
                        </div>

                        <h3>Address</h3>
                        <div className='contact-full-line'>
                            <div className='contact-half-line'></div>
                        </div>
                        <div className='d-flex mb-4'>
                            <span className='contact-icons mt-3'> <MdLocationOn/> </span>
                            <p>2130 Fulton Street San Diego, <br/>
                                CA 94117-1080 USA</p>
                        </div>

                        <h3>Opening Hours</h3>
                        <div className='contact-full-line'>
                            <div className='contact-half-line'></div>
                        </div>
                        <div className='d-flex mb-4'>
                            <span className='contact-icons mt-3'> <SiTimescale/> </span>
                            <p>Mon-Fri: 8:00am–6:00pm <br/>
                            Sat: 10:00am–4:00pm</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;