/* eslint-disable import/no-anonymous-default-export */
import Movies from './pages/Movies';
import Users from './pages/Users';
import User from './pages/User';
import Home from './pages/Home';

export default [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/movies',
        element: <Movies />
    },
    {
        path: '/users',
        element: <Users />

    },
    {
        path: '/users/:id',
        element: <User />
    },
]
