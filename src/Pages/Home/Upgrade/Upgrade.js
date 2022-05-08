import React from 'react';
import { useNavigate } from 'react-router-dom';
import upgrade from '../../../images/upgrade.jpg';
import './Upgrade.css';

const Upgrade = () => {
    const navigate = useNavigate();

    return (
        <div className='container upgrade-section'>
            <div className='row mx-auto'>
                <div className="col-12 col-md-6 upgrade-text">
                    <div className='d-flex align-items-center mt-5 mb-4'>
                        <div className='upgrade-straight-line'></div>
                        <h1 className='upgrade-header'>Looking To Upgrade?</h1>
                    </div>
                    <h3>Let's discuss so that the upgrade is according to your wishes.</h3>
                     <button onClick={ () => navigate("/contact")} className='all-btn mt-4'>Contact Us</button>
                </div>
                <div className="col-12 col-md-6 upgrade-img">
                    <img className='img-fluid img-hover' src={upgrade} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Upgrade;