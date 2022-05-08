import React from "react";
import "./Banner.css";
import sliderImg1 from "../../../images/banner/banner1.jpg";
import sliderImg2 from "../../../images/banner/banner2.jpg";
import sliderImg3 from "../../../images/banner/banner3.jpg";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="banner">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={sliderImg1}
              className="carousel-image"
              alt="..."
            />
            <div className="cover">
                <div className="container header-content">
                    <div className="line"></div>
                    <div className='d-flex align-items-center mt-5 mb-3'>
                        <div className='straight-line'></div>
                        <h2 className='section-header-title banner-title'>Welcome You</h2>
                    </div>
                    <h1 className="text-white">Ride Like <span className="red">A Pro</span></h1>
                    <p className="text-white">“Bicycles are almost as good as guitars for meeting girls.”</p>
                    <button className='all-btn mt-4' onClick={ () => navigate('/about')}>About Us</button>
                </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={sliderImg2}
              className="carousel-image"
              alt="..."
            />
            <div className="cover">
                <div className="container header-content">
                    <div className="line"></div>
                    <div className='d-flex align-items-center mt-5 mb-3'>
                        <div className='straight-line'></div>
                        <h2 className='section-header-title banner-title'>Welcome You</h2>
                    </div>
                    <h1 className="text-white">Ride Like <span className="red">A Pro</span></h1>
                    <p className="text-white">“Bicycles are almost as good as guitars for meeting girls.”</p>
                    <button className='all-btn mt-4' onClick={ () => navigate('/about')}>About Us</button>
                </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={sliderImg3}
              className="carousel-image"
              alt="..."
            />
            <div className="cover">
                <div className="container header-content">
                    <div className="line"></div>
                    <div className='d-flex align-items-center mt-5 mb-3'>
                        <div className='straight-line'></div>
                        <h2 className='section-header-title banner-title'>Welcome You</h2>
                    </div>
                    <h1 className="text-white">Ride Like <span className="red">A Pro</span></h1>
                    <p className="text-white">“Bicycles are almost as good as guitars for meeting girls.”</p>
                    <button className='all-btn mt-4' onClick={ () => navigate('/about')}>About Us</button>
                </div>
            </div>
          </div>

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
