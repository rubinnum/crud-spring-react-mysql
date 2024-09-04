import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import backend_api from "../api/backend_api.js";

function ViewUser(props) {
    const [user, setUser] = useState({
        "name": "",
        "username": "",
        "email": ""
    });
    const {id: userId} = useParams();

    const loadUser = async () => {
        const response = await backend_api.get(`/user/${userId}`)
        setUser(response.data);
    }

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 border offset-md-3 rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">User Details</h2>
                    <div className="card">
                        <div className="card-header">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>User ID: </b>
                                    {user.id}
                                </li>
                                <li className="list-group-item">
                                    <b>Name: </b>
                                    {user.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Username: </b>
                                    {user.username}
                                </li>
                                <li className="list-group-item">
                                    <b>Email: </b>
                                    {user.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to="/">Back Home</Link>
                </div>
            </div>
        </div>
    );
}

export default ViewUser;