import React from 'react';
import useCity from '../../../Hooks/useCity';
import './nearcity.css'
import NearCityData from './NearCityData';
const NearCity = () => {
    const [city] = useCity();
    return (
        <div className="container text-center py-5">
            <h1>Near City</h1>
            <div className="row g-2 py-3">
                {
                    city.map(city => <NearCityData
                    city= {city}
                    ></NearCityData>)
                }
            </div>
        </div>
    );
};

export default NearCity;