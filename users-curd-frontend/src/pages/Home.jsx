import React, {useEffect, useState} from 'react';
import backend_api from "../api/backend_api.js";

function Home() {
    const [users, setUsers] = useState([]);

    const getAllUsers = async () => {
        const allUsers = await backend_api.get("/users");
        console.log(allUsers.data)
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                        <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                    </tr>);
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;