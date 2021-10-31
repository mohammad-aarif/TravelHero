import React from 'react';

const ManageData = (props) => {
    const{name, email, person, place, _id} = props.data
    const handleDelete = props.handleDelete;
    return (
        <tr>
            <th>{name}</th>
            <td>{email}</td>
            <td>{place}</td>
            <td>{person}</td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default ManageData;