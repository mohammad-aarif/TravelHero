import React from 'react';
import useDestination from '../../Hooks/useDestination';
import DestinationData from './DestinationData';
const Destination = () => {
    const[destination] = useDestination()
    return (
        <div>
            <div className="text-center py-3 my-2 destination-banner text-light">
                <h4 className="text-secondary">Let's Go Together</h4>
                <h1>Our Recect Destination</h1>
                <p>Pack the bag and let's go together. Explore The life! Explore the World</p>
            </div>
            <div className="container py-5">
                <div className="row g-5">
                    {
                        destination.map(data => <DestinationData
                        key={data._id}
                        dest = {data}
                        ></DestinationData>) 
                    }
                </div>
            </div>
        </div>
    );
};

export default Destination;