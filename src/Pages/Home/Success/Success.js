import React from 'react';
import CountUp from 'react-countup'
import './success.css'
const Success = () => {
    return (
        <div className="success">
            <div className="container py-5">
                <div className="row my-5 text-center bg-light rounded">
                    <div className="col-md-3 p-2 col-12">
                        <h2><CountUp delay={5} start={0} end={56} duration={3.75} suffix="+" /></h2>
                        <h5 className="text-secondary">Active Tour</h5>
                    </div>
                    <div className="col-md-3 p-2 col-12">
                        <h2><CountUp delay={5} start={0} end={2000} duration={4.75} suffix="+" /></h2>
                        <h5 className="text-secondary">Tour Completed</h5>
                    </div>
                    <div className="col-md-3 p-2 col-12">
                        <h2><CountUp delay={5} start={0} end={12000} duration={4.75} suffix="+" /></h2>
                        <h5 className="text-secondary">Active User</h5>
                    </div>
                    <div className="col-md-3 p-2 col-12">
                        <h2><CountUp delay={5} start={0} end={130} duration={4.75} suffix="+" /></h2>
                        <h5 className="text-secondary">Guide</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;