import React from 'react'
import demoVideo from "./../../videos/main-video.mp4";
import "./MiddleSection.css";

const MiddleSection = () => {
    return (
        <div className="video-container">
            <video autoPlay muted loop playsInline className="video-bg">
                <source src={demoVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="video-overlay">
                <h1 className="video-text">Find Your Dream Property</h1>
                <p className="video-paragraph">
                    Premium plots, flats, and commercial spaces with verified listings and expert guidance
                </p>

                {/* Stats Section */}
                <div className="stats-container">
                    <div className="stat-box">
                        <p className="stat-number">500+</p>
                        <p className="stat-label">Properties Listed</p>
                    </div>
                    <div className="stat-box">
                        <p className="stat-number">50+</p>
                        <p className="stat-label">Trusted Builders</p>
                    </div>
                    <div className="stat-box">
                        <p className="stat-number">1000+</p>
                        <p className="stat-label">Happy Customers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleSection;

