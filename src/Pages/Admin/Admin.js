import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './admin.css'
import ManageData from './ManageData';
const Admin = () => {
    const[manage, setManage] = useState([])
    useEffect(() => {
        fetch('https://creepy-spell-57353.herokuapp.com/manage')
        .then(res => res.json())
        .then(data => setManage(data))
    }, [])
    const handleDelete = id => {
        const url = `https://creepy-spell-57353.herokuapp.com/manage/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                const reamaining = manage.filter(data => data._id !== id);
                setManage(reamaining)
                alert('Delete Succesfull')
            }
        })
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <ul class="nav admin-sidebar flex-column">
                        <li><Link to="admin">Dashboard</Link></li>
                        <li><Link to="addtour">Add Tour</Link></li>
                    </ul>
                </div>
                <div className="col-md-8">
                    <div className="container">         
                        <h1 className="text-center py-3"> Dashboard</h1>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Destination</th>
                                <th scope="col">Status</th>
                                <th scope="col">#</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    manage.map(data => <ManageData
                                    key= {data._id}
                                    data = {data}
                                    handleDelete = {handleDelete}
                                    ></ManageData>)
                                }
                            </tbody>
                            </table>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Admin;