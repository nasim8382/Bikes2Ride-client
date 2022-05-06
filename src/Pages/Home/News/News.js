import React from 'react';
import news1 from '../../../images/news/news1.jpg';
import news2 from '../../../images/news/news2.jpg';
import news3 from '../../../images/news/news3.jpg';
import './News.css';

const News = () => {
    return (
        <div className='news-section'>
            <div className='d-flex align-items-center justify-content-center my-5'>
                <div className='news-straight-line'></div>
                <h1 className='news-header'>Latest News</h1>
            </div>
            <div className="row">
                <div className="col-12 col-lg-4 news-div">
                    <img className='img-fluid rounded img-hover' src={news1} alt="" />
                    <h6>1 day ago by Joyce Contreras</h6>
                    <h2>Rent a Bike Touring Bikes</h2>
                    <p>Our new touring bikes have had rave reviews. They have been successfully ridden all over the BD, covering hundreds of kilometres.</p>
                </div>
                <div className="col-12 col-lg-4 news-div">
                    <img className='img-fluid rounded img-hover' src={news2} alt="" />
                    <h6>2 days ago by Dan Newman</h6>
                    <h2>Long-distance Bike Tours</h2>
                    <p>In this article, our regular customers tell about their experience and impression they got from our newest long-distance bike tours.</p>
                </div>
                <div className="col-12 col-lg-4 news-div">
                    <img className='img-fluid rounded img-hover' src={news3} alt="" />
                    <h6>2 days ago by Laura Wallace</h6>
                    <h2>5 Reasons to Take the Bike</h2>
                    <p>Taking the bike may not be the number one mode of transport that comes to mind when planning your trip, but it is definitely useful.</p>
                </div>
            </div>
        </div>
    );
};

export default News;