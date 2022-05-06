import React from 'react';
import women from '../../../images/spacial-bicycle/women.jpg';
import men from '../../../images/spacial-bicycle/men.jpg';
import './SpecialBicycle.css';

const SpecialBicycle = () => {
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-12 col-md-6 rounded women-cycle'>
                    <img className='img-fluid' src={women} alt="" />
                </div>
                <div className='col-12 col-md-6 rounded'>
                    <img className='img-fluid' src={men} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SpecialBicycle;