import React from 'react';
import { useForm } from 'react-hook-form';
// import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddTour = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        axios.post('https://creepy-spell-57353.herokuapp.com/tour', data)
        .then(res => {
            if(res.data.insertedId){
                alert("Successfully Added")
            }
            else{
                console.log(res)
            }
        })
    };
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <ul className="nav admin-sidebar flex-column">
                        <li><Link to="admin">Dashboard</Link></li>
                        <li><Link to="addTour">Add Tour</Link></li>
                    </ul>
                </div>
                <div className="col-md-8 py-5">
                    <h4 className="text-center">Add A place to Travel</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Tour Name"  {...register("name")} aria-label="Your Email" aria-describedby="basic-addon2"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Tour Price"  {...register("cost")} aria-label="Your Email" aria-describedby="basic-addon2"/>
                        <input type="text" className="form-control" placeholder="Image URL"  {...register("img")} aria-label="Your Email" aria-describedby="basic-addon2"/>
                    </div>
                    <div className="input-group mb-3">
                        <textarea className="form-control" placeholder="Brief Description"  {...register("description")} cols="30" rows="10"></textarea>
                    </div>
                    <input type="submit" className="btn general-btn w-100"/>
                    </form>
                </div>
        </div>

        </div>
    );
};

export default AddTour;