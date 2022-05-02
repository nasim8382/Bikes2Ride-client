import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import "./RequireAuth.css";
import Typewriter from 'typewriter-effect';
import spinnerImg from '../../../images/spinner1.gif';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);

  if (loading || sending) {
    return <img className="img-fluid spinner-img mx-auto d-block" src={spinnerImg} alt="" />
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return <div className="requireauth">
        <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="straight-line"></div>
          <h1 className="section-header-title">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Verify Your Email").start();
              }}
            />
          </h1>
        </div>

        <div className="text-center mt-5">
          <h2 className="text-danger mb-5">Your Email is not verified!!</h2>
          <button
            className="btn all-btn verify-btn"
            onClick={async () => {
              await sendEmailVerification();
              alert("Your Email is Sent");
            }}
          >Send Verification Email Again</button>
        </div>
      </div>
  }

  return children;
};

export default RequireAuth;
