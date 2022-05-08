import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { useForm } from "react-hook-form";
import './SignUp.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import spinner from '../../../images/spinner.gif';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const SignUp = () => {
    const location = useLocation();
    const { register, handleSubmit } = useForm();
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    let loadingElement;
    let from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    if (loading) {
        loadingElement = <img className='spinner' src={spinner} alt="loading" />;
    }

    const onSubmit = async(data) => {
        const email = data.email;
        const password = data.password;
        const confirmpassword = data.confirmpassword;

        if (password !== confirmpassword) {
            setError('Your two passwords did not match!!!');
            return;
        }

        if (password.length < 6) {
            setError('Password must have 6 characters or more!!!');
            return;
        }

        if (!/(?=.*[0-9])/.test(password)) {
            setError('Password must have at least one number!!!');
            return;
        }

        if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('Password must have at least one special character!!!');
            return;
        }

        await createUserWithEmailAndPassword(email, password);
        navigate(from, { replace: true });

    };

    return (
        <div  className='sign-up-section'>
            <PageTitle title="Sign-Up"></PageTitle>
            <div className='d-flex align-items-center justify-content-center mt-4 mb-5'>
                <div className='straight-line'></div>
                <h1 className='section-header-title'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Sign Up").start();
                        }}
                    />
                </h1>
            </div>

            <div className="container">
                <div className="row login-container">
                    <div className="col-12 col-md-7">
                        <div className='form-bg-sign-up'>
                            <div className='form-container-sign-up'>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Your Name" className="mt-5 mb-4 signup-input" {...register("name", { required: true, maxLength: 20 })} required/>
                                <input placeholder="Your Email" className="mb-4 signup-input" type="email" {...register("email")} required/>
                                <input placeholder="Password" className="mb-4 signup-input" type="password" {...register("password")} required/>
                                <input placeholder="Confirm Password" className="mb-3 signup-input" type="password" {...register("confirmpassword")} required/>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <input onClick={ () =>  setAgree(!agree) } {...register("checkbox")} type="checkbox" value="A" />
                                    <label className={`ms-2 ${agree ? 'green' : 'red'}`}>Agree to terms and Conditions</label>
                                </div>

                                <p className='red text-center mt-2'>{error}</p>
                                {loadingElement}

                                <input disabled={!agree} className='submit-style mx-auto' type="submit" value="Sign Up" />
                            </form>

                            <p className='text-center login-text'>Already have an Account?
                                <Link to='/login' className="text-decoration-none login-link"> Please Login</Link>
                            </p>

                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='signup-or-line'></div>
                                <h5 className='signup-or-text'>or sign up with</h5>
                                <div className='signup-or-line'></div>
                            </div>

                            <SocialLogin></SocialLogin>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 quotes-text">
                        <h1>“Life is like riding a bicycle – in order to keep your balance, you must keep moving.”</h1>
                        <h4>Albert Einstein</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;