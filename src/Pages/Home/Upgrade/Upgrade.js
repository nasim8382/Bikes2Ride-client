import React from 'react';
import upgrade from '../../../images/upgrade.jpg';
import './Upgrade.css';

const Upgrade = () => {
    return (
        <div className='container upgrade-section'>
            <div className='row mx-auto'>
                <div className="col-6">
                    <div className='d-flex align-items-center mt-5 mb-4'>
                        <div className='straight-line'></div>
                        <h1 className='section-header-title'>Looking To Upgrade?</h1>
                    </div>
                    <h3>Let's discuss so that the upgrade is according to your wishes.</h3>
                    <button className='all-btn mt-4'>Contact Us</button>
                </div>
                <div className="col-6">
                    <img className='img-fluid' src={upgrade} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Upgrade;