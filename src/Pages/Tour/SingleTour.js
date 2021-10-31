import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleTour = () => {
    const{tourid} = useParams();
    const url = `https://creepy-spell-57353.herokuapp.com/tour/${tourid}`;
    const[tour, setTour] = useState({})
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setTour(data))
    }, [])
    return (
        <div className="">
             <div className="tour-banner text-light my-2 text-center py-3">
                <h1>{tour.name}</h1>
            </div>
            <div className="container">
            <div className="details-img">
                <img src={tour.img} alt="" />
            </div>
            <div className="row py-3 align-items-center">
                <div className="col-md-6 col-12">
                    <h3>{tour.name}</h3>
                    <p>{tour.description}</p>
                </div>
                <div className="col-md-6 text-center  col-12">
                    <h2 className="text-danger">Only For ${tour?.cost}</h2>
                    <Link to={`/booking/${tour.name}`} className="btn w-100 general-btn">Book Now</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleTour;