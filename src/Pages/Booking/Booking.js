import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios'

const Booking = () => {
    const {booking} = useParams();
    const {user} = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        axios.post('https://creepy-spell-57353.herokuapp.com/manage', data)
        .then(res => {
            if(res.data.insertedId){
                alert("Successfully Booked")
            }
            else{
                console.log(res)
            }
        })
    };
    return (
        <div className="container">
            <h1 className="text-center">Fill the Form to Confirm Your Booking</h1>
            <div className="row ">
                <div className="col-md-12 col-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" defaultValue={user?.displayName} {...register("name")} placeholder="Your Name" aria-label="Your Name" aria-describedby="basic-addon1"/>
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Your Email" defaultValue={user?.email} {...register("email")} aria-label="Your Email" aria-describedby="basic-addon2"/>
                    </div>

                    <label htmlfor="basic-url" className="form-label">Book Your Ticket</label>

                    <div className="input-group mb-3">
                        <input type="text" defaultValue={booking} placeholder="Enter your Package Name" className="form-control" id="basic-url" {...register("place")} aria-describedby="basic-addon3"/>
                        <input placeholder="Enter Person Quantity" type="number" {...register("person")} className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                    <input className="btn general-btn w-100" type="submit" />
                    </div>
{/* 
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Your Name" aria-label="Your Name"/>
                        <input type="text" className="form-control" placeholder="Server" aria-label="Server"/>
                    </div> */}

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;