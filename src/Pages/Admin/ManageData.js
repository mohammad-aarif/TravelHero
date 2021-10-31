import React from 'react';

const ManageData = (props) => {
    const{name, email, person, packaged, _id} = props.data
    const handleDelete = props.handleDelete;
    return (
        <tr>
            <th>{name}</th>
            <td>{email}</td>
            <td>{packaged}</td>
            <td>{person}</td>
            <td><button onClick={() => handleDelete(_id)} class="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default ManageData;