import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Typewriter from 'typewriter-effect';
import './Login.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='sign-up-section'>
            <div className='d-flex align-items-center justify-content-center mt-4 mb-5'>
                <div className='straight-line'></div>
                <h1 className='section-header-title'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Sign In").start();
                        }}
                    />
                </h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className='form-bg-sign-up'>
                            <div className='form-container-sign-up'>

                            <div className='d-flex align-items-center justify-content-center mt-5'>
                                <div className='straight-line'></div>
                                <h1 className='login-header-title'>Welcome You</h1>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Email Address" className="mt-5 mb-4 signup-input" type="email" {...register("email")} />
                                <input placeholder="Your Password" className="mb-4 signup-input" type="password" {...register("password")} />
                                <input className='submit-style mx-auto' type="submit" value="Login" />
                            </form>

                            <p className='text-center login-text'>No Account?
                                <Link to='/signup' className="text-decoration-none login-link"> Create One</Link>
                            </p>

                            <p className='text-center reset-password'>Lost Your Password?</p>

                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='signup-or-line'></div>
                                <h5 className='signup-or-text'>or sign in  with</h5>
                                <div className='signup-or-line'></div>
                            </div>

                            <SocialLogin></SocialLogin>

                            </div>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;