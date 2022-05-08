import React, { useEffect } from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import './SocialLogin.css';
import auth from '../../../firebase.init';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import spinner from '../../../images/loader.gif';

const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [
        signInWithGoogle, 
        googleUser, 
        googleLoading, 
        googleError
    ] = useSignInWithGoogle(auth);

    const [
        signInWithFacebook, 
        fbUser, 
        fbLoading, 
        fbError
    ] = useSignInWithFacebook(auth);

    let from = location.state?.from?.pathname || "/";

    let errorElement;
    let loadingText;

    if (googleError|| fbError) {
        errorElement =  <p className='text-center text-danger'>Error:  {googleError?.message} {fbError?.message}</p>
    }

    useEffect(() => {
        if (googleUser || fbUser) {
            navigate(from, { replace: true });
        }
    }, [googleUser, fbUser, from, navigate]);

    if (googleLoading || fbLoading) {
        loadingText = <img className='loader' src={spinner} alt="spinner" />
    }

    return (
        <div>
            {loadingText}
            {errorElement}
            <div className='d-flex justify-content-center align-items-center mt-4 social-btn'>
                <button className='d-flex align-items-center social-login' onClick={ () => signInWithGoogle() }>
                    <img className='mx-3' height={30} src={google} alt="" />
                    <p>Google</p>
                </button>
                <button className='d-flex align-items-center social-login' onClick={ () => signInWithFacebook() }>
                    <img className='mx-2' height={40} src={facebook} alt="" />
                    <p>Facebook</p>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;