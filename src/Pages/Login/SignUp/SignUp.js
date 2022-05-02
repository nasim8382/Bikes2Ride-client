import React from 'react';
import Typewriter from 'typewriter-effect';
import { useForm } from "react-hook-form";
import './SignUp.css';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div  className='sign-up-section'>
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
                <div className="row">
                    <div className="col-8">
                        <div className='form-bg-sign-up'>
                            <div className='form-container-sign-up'>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Your Name" className="mt-5 mb-4 signup-input" {...register("name", { required: true, maxLength: 20 })} />
                                <input placeholder="Your Email" className="mb-4 signup-input" type="email" {...register("email")} />
                                <input placeholder="Password" className="mb-4 signup-input" type="password" {...register("password")} />
                                <input placeholder="Confirm Password" className="mb-3 signup-input" type="password" {...register("confirmpassword")} />
                                <div className='d-flex align-items-center justify-content-center'>
                                    <input {...register("checkbox")} type="checkbox" value="A" />
                                    <label className='ms-2 signup-label'>Agree to terms and Conditions</label>
                                </div>
                                <input className='submit-style mx-auto' type="submit" value="Sign Up" />
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
                    <div className="col-4"></div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;