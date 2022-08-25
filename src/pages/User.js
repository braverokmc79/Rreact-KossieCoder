import React, { useEffect, useState } from 'react';
import axios from "axios";
import UserList from '../components/UserList';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';

const User = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    console.log("id : ", id);
    useEffect(() => {
        axios.get("http://jsonplaceholder.typicode.com/users/" + id)
            .then(res => {
                console.log("1.res.data :", res.data);
                setUser(res.data);
                setLoading(false);
            })
    }, []);

    useEffect(() => {
        if (user !== null) {
            console.log("2.user :", user.name);
        }

    }, [user]);

    return (
        <>
            <h1>Users  정보</h1>

            {loading ? <Spinner />
                : null
            }
        </>

    );
};

export default User;