import React from 'react';
import { Link } from 'react-router-dom';

const TourData = (props) => {
    const{name, description, img, _id} = props.tour;
    return (
        <div className="col-md-4 col-lg-4 col-12">
            <div className="tour-img mx-auto">
                <img src={img} alt="" />
            </div>
            <div className="tour-info text-center py-3">
                <h2>{name}</h2>
                <p>{description.slice(0, 100)} <Link to='/'>[ ... ]</Link></p>
                <Link to= {`/tour/${_id}`} className="btn w-100 general-btn">Details</Link>
            </div>
        </div>
    );
};

export default TourData;