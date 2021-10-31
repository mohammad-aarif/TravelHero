import React from 'react';
import { Link } from 'react-router-dom';
import './aboutus.css'
const AboutUs = () => {
    return (
        <div id="aboutus" className="container about-us">
            <div className="row py-5 align-item-center">
                <div className="col-md-6 col-lg-6 col-12">
                    <h4 className="text-secondary">Why Choose Us</h4>
                    <h1>World Best Travel Agency Company Since 2020.</h1>
                    <p>Through our website, travelers can search for and book private tours in over 190 different countries. With a ToursByLocals tour, travelers can discover new cities, towns and regions through many lenses: history, photography, food and wine, architecture, art, music, nature and local culture (to name a few!)</p>
                    <Link to="/tour" className="btn general-btn">Popular Places</Link>
                </div>
                <div className="col-md-6 col-lg-6 col-12 about-img">
                    <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;