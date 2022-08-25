import React, { useEffect, useState } from 'react';
import axios from "axios";
import UserList from './../components/UserList';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://jsonplaceholder.typicode.com/users")
            .then(res => {
              //  console.log("1.res.data :", res.data);
                setUsers(res.data);
            })
    }, []);

    useEffect(() => {
        //console.log("2.users :", users);
    }, [users]);

    return (
        <>
            <h1>Users</h1>
            <UserList users={users} />

        </>

    );
};

export default Users;