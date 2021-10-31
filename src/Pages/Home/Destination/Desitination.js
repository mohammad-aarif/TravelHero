import React from 'react';
import { Link } from 'react-router-dom';
import useDestination from '../../../Hooks/useDestination';
import DesitinationData from './DesitinationData';
import './destination.css'
const Desitination = () => {
    const [destination] =useDestination();
    return (
        <div className="container py-5">
            <div className="row g-5">

                <div className="col-md-4 col-12">
                    <h4 className="text-secondary">Let's Go Together</h4>
                    <h1>Our Recect Destination</h1>
                    <p>Pack the bag and let's go together. Explore The life! Explore the World</p>
                    <Link to="/destination" className="btn general-btn">Destination</Link>
                </div>
                {
                    destination.map(data => <DesitinationData 
                    dest = {data}
                    ></DesitinationData>)
                }
            </div>

        </div>
    );
};

export default Desitination;