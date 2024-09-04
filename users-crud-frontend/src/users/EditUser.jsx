import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import backend_api from "../api/backend_api.js";

function EditUser() {
    const navigate = useNavigate();
    const {id: userId} = useParams();

    const [user, setUser] = useState({
        "name": "",
        "username": "",
        "email": ""
    });
    const {name, username, email} = user

    const loadUser = async (userId) => {
        const currentUser = await backend_api.get(`/user/${userId}`);
        setUser(currentUser.data);
    }

    useEffect(() => {
        loadUser(userId);
    }, []);

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const editUser = async (e) => {
        e.preventDefault();
        await backend_api.put(`/user/${userId}`, user);
        navigate("/");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 border offset-md-3 rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register User</h2>
                    <form onSubmit={(e) => editUser(e)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="Enter your name" name="name"
                                   id="name" value={name} onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" placeholder="Enter your username"
                                   name="username"
                                   id="username" value={username} onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="text" className="form-control" placeholder="Enter your e-mail" name="email"
                                   id="email" value={email} onChange={(e) => onInputChange(e)}/>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                        <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditUser;