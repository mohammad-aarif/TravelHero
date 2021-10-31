import React from 'react';
import useTour from '../../Hooks/useTour'
import TourData from './TourData';
const Tour = () => {
    const[tour] = useTour();
    return (
        <div className="tour">
            <div className="tour-banner text-light my-2 text-center py-3">
            <h4 className="text-secondary">Find Your Place</h4>
            <h1>Popular Place to Travel</h1>
            <p>Visit your fabourite place with amazing rate. Book a tour as soon as posible</p>
            </div>
            <div className="container">
                <div className="row g-5 py-3">
                    {
                        tour.map(tour => <TourData
                        key={tour.key}
                        tour = {tour}
                        ></TourData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tour;