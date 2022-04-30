import React from 'react';
import Typewriter from 'typewriter-effect';

const Contact = () => {
    return (
        <div>
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
        </div>
    );
};

export default Contact;