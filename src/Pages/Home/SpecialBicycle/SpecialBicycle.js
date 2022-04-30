import React from 'react';
import women from '../../../images/spacial-bicycle/women.jpg';
import men from '../../../images/spacial-bicycle/men.jpg';

const SpecialBicycle = () => {
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-6 col-md-6 women-cycle'>
                    <img className='img-fluid' src={women} alt="" />
                </div>
                <div className='col-6 col-md-6 men-cycle'>
                    <img className='img-fluid' src={men} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SpecialBicycle;