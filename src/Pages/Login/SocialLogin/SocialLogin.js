import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import './SocialLogin.css';

const SocialLogin = () => {
    return (
        <div className='d-flex justify-content-center align-items-center mt-4'>
                <button className='me-4 d-flex align-items-center social-login'>
                    <img className='mx-3' height={30} src={google} alt="" />
                    <p>Google</p>
                </button>
                <button className='d-flex align-items-center social-login'>
                    <img className='mx-2' height={40} src={facebook} alt="" />
                    <p>Facebook</p>
                </button>
        </div>
    );
};

export default SocialLogin;