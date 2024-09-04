import React, {useEffect, useState} from 'react';
import backend_api from "../api/backend_api.js";
import {Link} from "react-router-dom";

function Home() {
    const [users, setUsers] = useState([]);

    const getAllUsers = async () => {
        const allUsers = await backend_api.get("/users");
        setUsers(allUsers.data);
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div className='container'>
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button className="btn btn-primary mx-2">View</button>
                                            <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>Edit</Link>
                                            <button className="btn btn-danger mx-2">Delete</button>
                                        </td>
                                    </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;