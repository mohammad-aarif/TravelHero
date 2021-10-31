import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const SingleDestination = () => {
    const {id} = useParams()
    const url = `https://creepy-spell-57353.herokuapp.com/destination/${id}`;
    const[destination, setDestination] = useState({})
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setDestination(data))
    }, [])
    return (
        <div className="">
             <div className="destination-banner text-light my-2 text-center py-3">
                <h1>{destination.name}</h1>
            </div>
            <div className="container">
            <div className="details-img">
                <img src={destination.img} alt="" />
            </div>
            <div className="row py-3 align-items-center">
                <div className="col-md-6 col-12">
                <h4>{destination.name}</h4>
                <p className="text-info"><b>{destination.availity}</b></p>
                <div className="d-flex text-secondary justify-content-between">
                    <p><b>From:</b> {destination.from}</p>
                    <p><b>{destination.booked} Booked</b></p>
                </div>
                </div>
                <div className="col-md-6 text-center  col-12">
                    <h2 className="text-danger">Only For ${destination?.price}</h2>
                    <Link to={`/booking/${destination.name}`} className="btn w-100 general-btn">Book Now</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleDestination;