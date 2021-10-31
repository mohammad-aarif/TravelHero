import React from 'react';
import { Link } from 'react-router-dom';

const TourData = (props) => {
    const {name, img, description, _id} = props.tour
    return (
        <div className="col-md-6 col-lg-6 col-12">
            <div className="tour-img mx-auto">
                <img src={img} alt="" />
            </div>
            <div className="tour-info text-center py-3">
                <h2>{name}</h2>
                <p>{description.slice(0, 100)}</p>
                <Link to= {`/tour/${_id}`} className="btn w-100 general-btn">Details</Link>
            </div>
        </div>
    );
};

export default TourData;