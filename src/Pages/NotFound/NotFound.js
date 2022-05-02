import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notfound-section'>
            <img className='w-100 img-fluid' src={notFound} alt="" />
            <div className='d-flex justify-content-center align-items-center mt-5'>
                    <Link to="/home" className='link-style'>
                        <button className='all-btn'>Back to Home</button>
                    </Link>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='or_line'></div>
                    <h2>or</h2>
                    <div className='or_line'></div>
                </div>
                    <Link to="/contact" className='link-style'>
                        <button className='all-btn'>Contact Us</button>
                    </Link>
            </div>
        </div>
    );
};

export default NotFound;