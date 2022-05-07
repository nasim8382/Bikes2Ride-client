import React from 'react';
import Typewriter from 'typewriter-effect';
import PageTitle from '../Shared/PageTitle/PageTitle';
import team1 from '../../images/team/professional1.jpg';
import team2 from '../../images/team/professional2.jpg';
import team3 from '../../images/team/professional3.jpg';
import team4 from '../../images/team/staff1.jpg';
import team5 from '../../images/team/staff2.jpg';
import team6 from '../../images/team/staff3.jpg';
import team7 from '../../images/team/staff4.jpg';
import team8 from '../../images/team/staff5.jpg';
import team9 from '../../images/team/staff6.jpg';
import './Team.css';

const Team = () => {
    return (
        <div className='team-section'>
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

            <div className="container">
                <div className="row">
                <h1 className='red text-center mb-3 professional-header'>Professional Team</h1>
                    <div className="col-12 col-md-6 col-lg-4 professional-team">
                        <div className="team-bg">
                            <div className="team">
                                <img className='img-hover' src={team1} alt="" />
                            </div>
                        </div>
                        <h1 className='green mt-4 mb-3'>Henry Mason</h1>
                        <h5 className='text-secondary'>Founder RoadPedal</h5>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 professional-team">
                        <div className="team-bg">
                            <div className="team">
                                <img className='img-hover' src={team2} alt="" />
                            </div>
                        </div>
                        <h1 className='green mt-4 mb-3'>Steven Snow</h1>
                        <h5 className='text-secondary'>CEO RoadPedal</h5>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 professional-team">
                        <div className="team-bg">
                            <div className="team">
                                <img className='img-hover' src={team3} alt="" />
                            </div>
                        </div>
                        <h1 className='green mt-4 mb-3'>Alisha Morris</h1>
                        <h5 className='text-secondary'>CTO RoadPedal</h5>
                    </div>
                </div>

                <div className="row">
                <h1 className='red text-center mb-3 staff-header'>Our Staff</h1>
                    <div className="col-12 col-md-6 col-lg-4 professional-team">
                        <div className="staff-bg">
                            <div className="team">
                                <img className='img-hover' src={team4} alt="" />
                            </div>
                        </div>
                        <h1 className='green mt-4 mb-3'>Samantha Black</h1>
                        <h5 className='text-secondary'>Finance RoadPedal</h5>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 professional-team">
                        <div className="staff-bg">
                            <div className="team">
                                <img className='img-hover' src={team5} alt="" />
                            </div>
                        </div>
                        <h1 className='green mt-4 mb-3'>James Wilson</h1>
                        <h5 className='text-secondary'>Sales Manager</h5>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 professional-team">
                        <div className="staff-bg">
                            <div className="team">
                                <img className='img-hover' src={team6} alt="" />
                            </div>
                        </div>
                        <h1 className='green mt-4 mb-3'>Mary dalton</h1>
                        <h5 className='text-secondary'>Administrator</h5>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 professional-team">
                        <div className="staff-bg">
                            <div className="team">
                                <img className='img-hover' src={team7} alt="" />
                            </div>
                        </div>
                        <h1 className='green mt-4 mb-3'>Neel Johnson</h1>
                        <h5 className='text-secondary'>Mechanic</h5>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 professional-team">
                        <div className="staff-bg">
                            <div className="team">
                                <img className='img-hover' src={team8} alt="" />
                            </div>
                        </div>
                        <h1 className='green mt-4 mb-3'>Jimmy Dub</h1>
                        <h5 className='text-secondary'>Mechanic</h5>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 professional-team">
                        <div className="staff-bg">
                            <div className="team">
                                <img className='img-hover' src={team9} alt="" />
                            </div>
                        </div>
                        <h1 className='green mt-4 mb-3'>Lain Maluma</h1>
                        <h5 className='text-secondary'>Mechanic</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;