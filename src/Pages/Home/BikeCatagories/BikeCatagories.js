import React from 'react';
import roadBikes from '../../../images/Catagories/road-bikes.jpg';
import cruiserBikes from '../../../images/Catagories/cruiser-bikes.jpg';
import mountainBikes from '../../../images/Catagories/mountain-bikes.jpg';
import crossCountryBikes from '../../../images/Catagories/cross-country-bikes.jpg';
import wyomingBikes from '../../../images/Catagories/wyoming-bikes.jpg';
import gmrcBikes from '../../../images/Catagories/gmrc-bikes.jpg';
import './BikeCatagories.css';

const BikeCatagories = () => {
    return (
        <div className='mx-auto catagories'>
            <div className='d-flex align-items-center justify-content-center mb-5'>
                <div className='straight-line categories-line'></div>
                <h1 className='section-header-title'>Bike Catagories</h1>
            </div>
            <div className="row g-5">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className='image'>
                        <img className='img-fluid' src={mountainBikes} alt="" />
                        <div className='image_overlay'>
                            <div className='image_title'>Mountain Bikes</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className='image'>
                    <img className='img-fluid' src={cruiserBikes} alt="" />
                        <div className='image_overlay'>
                            <div className='image_title'>Cruiser Bikes</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className='image'>
                        <img className='img-fluid' src={roadBikes} alt="" />
                        <div className='image_overlay'>
                            <div className='image_title'>Road Bikes</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className='image'>
                        <img className='img-fluid' src={gmrcBikes} alt="" />
                        <div className='image_overlay'>
                            <div className='image_title'>Gmrc Bikes</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">                   
                    <div className='image'>
                        <img className='img-fluid' src={wyomingBikes} alt="" />
                        <div className='image_overlay'>
                            <div className='image_title'>Wyoming Bikes</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className='image'>
                        <img className='img-fluid' src={crossCountryBikes} alt="" />
                        <div className='image_overlay'>
                            <div className='image_title'>Cross Country Bikes</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BikeCatagories;