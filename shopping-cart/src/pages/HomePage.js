import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const MainPage = () => {
    return (
        <div className="main-banner" id="top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-content">
                            <div className="thumb">
                                <div className="inner-content">
                                    <h4>We Are Hexashop</h4>
                                    <span>Awesome, clean &amp; creative HTML5 Template</span>
                                    <div className="main-border-button">
                                        <Link to="/cart">Purchase Now!</Link> 
                                    </div>
                                </div>
                                <img src="assets/images/left-banner-image.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-content">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Women</h4>
                                                <span>Best Clothes For Women</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Women</h4>
                                                    <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                    <div className="main-border-button">
                                                        <Link to="/women">Discover More</Link> 
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="assets/images/baner-right-image-01.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Men</h4>
                                                <span>Best Clothes For Men</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Men</h4>
                                                    <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                    <div className="main-border-button">
                                                        <Link to="/men">Discover More</Link> 
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="assets/images/baner-right-image-02.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Kids</h4>
                                                <span>Best Clothes For Kids</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <h4>Kids</h4>
                                                    <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                    <div className="main-border-button">
                                                        <Link to="/kids">Discover More</Link> 
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="assets/images/baner-right-image-03.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
