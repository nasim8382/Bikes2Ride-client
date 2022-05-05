import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Typewriter from 'typewriter-effect';

const UpdateStock = () => {
    return (
        <div>
            <PageTitle title="Stock-Update"></PageTitle>
            <div className='d-flex align-items-center justify-content-center mt-5 mb-4'>
                <div className='straight-line'></div>
                <h1 className='section-header-title'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Update Your Stock").start();
                        }}
                    />
                </h1>
            </div>
        </div>
    );
};

export default UpdateStock;