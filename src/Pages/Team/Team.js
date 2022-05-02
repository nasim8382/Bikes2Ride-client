import React from 'react';
import Typewriter from 'typewriter-effect';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Team = () => {
    return (
        <div>
            <PageTitle title="Team"></PageTitle>
            <div className='d-flex align-items-center justify-content-center my-5'>
                <div className='straight-line'></div>
                <h1 className='section-header-title'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Meet Our Team").start();
                        }}
                    />
                </h1>
            </div>
        </div>
    );
};

export default Team;