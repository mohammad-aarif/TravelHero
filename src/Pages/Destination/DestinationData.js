import React from 'react';
import { Link } from 'react-router-dom';

const DestinationData = (props) => {
    const{name, img, availity, booked, from, _id } = props.dest;
    return (
        <div className="col-md-6 col-12">
            <div className="destination-img">
            <img src={img} alt={name} />
            </div>
            <div className="destination-info pt-3">
                <h4>{name}</h4>
                <p className="text-info"><b>{availity}</b></p>
                <div className="d-flex text-secondary justify-content-between">
                    <p><b>From:</b> {from}</p>
                    <p><b>{booked} Booked</b></p>
                </div>
            </div>
                <Link to={`destination/${_id}`} className="btn w-100 general-btn">Details</Link>
        </div>
    );
};

export default DestinationData;