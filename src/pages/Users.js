import React, { useEffect, useState } from 'react';
import axios from "axios";
import UserList from './../components/UserList';
import Spinner from '../components/Spinner';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://jsonplaceholder.typicode.com/users")
            .then(res => {
                //  console.log("1.res.data :", res.data);
                setUsers(res.data);
                setLoading(false);
            })
    }, []);

    useEffect(() => {
        //console.log("2.users :", users);
    }, [users]);

    return (
        <>
            <h1>Users</h1>
            {loading ? <Spinner /> :
                <UserList users={users} />
            }

        </>

    );
};

export default Users;