import React from 'react';
import Typewriter from 'typewriter-effect';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './MyItems.css';
import { RiChatDeleteLine} from "react-icons/ri";

const MyItems = () => {
    return (
        <div>
            <PageTitle title="My-Items"></PageTitle>
            <div className='d-flex align-items-center justify-content-center my-5'>
                <div className='straight-line'></div>
                <h1 className='section-header-title'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Your Products").start();
                        }}
                    />
                </h1>
            </div>
            <div className='my-items-section'>
                <div className='container'>
                    <div className='d-flex align-items-center items-div mx-auto shadow-lg'>
                        <img className='my-items-img me-4' src="https://i.ibb.co/ZMW3Yzx/05.jpg" alt="" />
                        <h2 className='me-5 green items-header'>OUTRAGE 605 BLACK </h2>
                        <h2 className='me-4 green'>$888</h2>
                        <button className='delete-button'>
                            <RiChatDeleteLine/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyItems;