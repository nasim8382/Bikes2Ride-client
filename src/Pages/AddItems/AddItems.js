import React from 'react';
import Typewriter from 'typewriter-effect';
import './AddItems.css';

const AddItems = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center my-5'>
                <div className='straight-line'></div>
                <h1 className='section-header-title'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Add Products").start();
                        }}
                    />
                </h1>
            </div>
            <div className='add-items'>
                <h1>Add your items</h1>
            </div>
        </div>
    );
};

export default AddItems;