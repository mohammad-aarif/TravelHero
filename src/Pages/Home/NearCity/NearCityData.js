import React from 'react';

const NearCityData = (props) => {
    const { name, img, dist } = props.city
    return (
        <div className="col-md-3 col-12 near-city">
        <div className="near-city-img">
            <img src={img} alt="" />
        </div>
            <div className="near-city-info d-flex justify-content-center align-item-center flex-column text-center">
                <h4>{name}</h4>
                <h6>{dist}KM away</h6>
            </div>
    </div>
    );
};

export default NearCityData;