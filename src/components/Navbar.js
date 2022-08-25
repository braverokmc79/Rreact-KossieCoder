/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, Routes, Route, Outlet } from "react-router-dom";

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" to="/movies">Movies <span className="sr-only">(current)</span></Link>
                    <Link className="nav-link" to="/users">Users</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;