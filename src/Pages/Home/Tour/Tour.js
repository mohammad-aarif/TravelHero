import React from 'react';
import useTour from '../../../Hooks/useTour';
import './tour.css';
import TourData from './TourData';
const Tour = () => {
    const[tour] = useTour();
    const data = tour.slice(0,6)
    return (
        <div className="container text-center py-5">
            <h4 className="text-secondary">Find Your Place</h4>
            <h1>Popular Place to Travel</h1>
            <p>Visit your fabourite place with amazing rate. Book a tour as soon as posible</p>
            <div className="row g-5 py-3">
                {
                    data.map(tour => <TourData
                        key={tour._id}
                        tour={tour}
                        ></TourData>)
                }
            </div>
        </div>
    );
};

export default Tour;