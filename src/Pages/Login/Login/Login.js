import React, { useRef} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import './Login.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import spinner from '../../../images/spinner.gif';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import axios from 'axios';

const Login = () => {
    const emailRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    let loadingElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        loadingElement = <img className='spinner' src={spinner} alt="spinner" />;
    }

    if (error) {
        errorElement =  <p className='text-center text-danger mt-2'>Error: {error?.message}</p>
    }

    if (user) {
        // navigate(from, { replace: true });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        await signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('https://intense-castle-31682.herokuapp.com/signin', {email});
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
        console.log(email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Successfully sent reset link to your email');
        }
        else {
            toast.error('Please enter your email address');
        }
    }

    return (
        <div className='sign-up-section'>
            <PageTitle title="Sign-In"></PageTitle>
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
                <div className="row login-container">
                    <div className="col-12 col-md-7">
                        <div className='form-bg-login'>
                            <div className='form-container-login'>

                            <div className='d-flex align-items-center justify-content-center mt-5'>
                                <div className='straight-line'></div>
                                <h1 className='login-header-title'>Welcome You</h1>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <input ref={emailRef} placeholder="Email Address" className="mt-5 mb-4 signup-input" type="email" name="email" required/>
                                <input placeholder="Your Password" className="mb-4 signup-input" type="password" name="password" required/>
                                {errorElement}
                                {loadingElement}
                                <input className='submit-style mx-auto' type="submit" value="Login" />
                            </form>

                            <p className='text-center login-text'>No Account?
                                <Link to='/signup' className="text-decoration-none login-link"> Create One</Link>
                            </p>

                            <p onClick={resetPassword} className='text-center reset-password'>Lost Your Password?</p>

                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='signup-or-line'></div>
                                <h5 className='signup-or-text'>or sign in  with</h5>
                                <div className='signup-or-line'></div>
                            </div>

                            <SocialLogin></SocialLogin>
                            <ToastContainer position="top-center" />
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

export default Login;