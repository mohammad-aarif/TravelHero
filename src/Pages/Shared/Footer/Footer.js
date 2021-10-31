import React from 'react';
import { Link } from 'react-router-dom';
import useCity from '../../../Hooks/useCity';
import './footer.css'
import FooterImg from './FooterImg';
const Footer = () => {
    const[city] = useCity();
    return (
        <div className="footer py-3 mt-3">
        <div className="container text-light">
            <div className="row">
                <div className="col-md-4 col-12">
                    <h1>TravelHero</h1>
                    <h4>Let's Travel with TravelHero</h4>
                    <p>124 fake street, 2b fake Road Fake City. <br /> New Yourk, Bangladesh</p>
                </div>
                <div className="col-md-4 col-12">
                    <h4>Services</h4>
                    <div className="footer-services d-flex flex-column">
                    <Link to="/">About Us</Link>
                    <Link to="/">Tour</Link>
                    <Link to="/">Recen Desitination</Link>
                    <Link to="/">Your Near City</Link>
                    </div>
                </div>

                <div className="col-md-4 col-12">
                    <h4>Gallery</h4>
                    <div className="row p-2 justify-content-center">
                        {
                            city.map(img => <FooterImg
                            key = {img.key}
                            img = {img}
                            ></FooterImg>)
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;