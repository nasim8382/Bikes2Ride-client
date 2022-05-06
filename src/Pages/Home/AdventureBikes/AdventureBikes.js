import React from 'react';
import adventureBike from '../../../images/adventure-bikes/adventure-bike.jpg';
import adventureBikePart1 from '../../../images/adventure-bikes/adventure-part-1.jpg';
import adventureBikePart2 from '../../../images/adventure-bikes/adventure-part-2.jpg';
import adventureBikePart3 from '../../../images/adventure-bikes/adventure-part-3.jpg';
import './AdventureBikes.css';

const AdventureBikes = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 col-md-6">
                    <img className='img-fluid adventure-img' src={adventureBike} alt="" />
                </div>
                <div className="col-12 col-md-6 my-auto">
                    <div className='d-flex align-items-center justify-content-center mb-5'>
                        <div className='adventure-straight-line'></div>
                        <h1 className='adventure-header'>Best Adventure Tourer Bikes</h1>
                    </div>
                    <div className='row mx-auto'>
                        <div className="col-4">
                            <img className='img-fluid' src={adventureBikePart1} alt="" />
                        </div>
                        <div className="col-4">
                            <img className='img-fluid' src={adventureBikePart2} alt="" />
                        </div>
                        <div className="col-4">
                            <img className='img-fluid' src={adventureBikePart3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdventureBikes;