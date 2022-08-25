/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/" >Home</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/*현재 버전의  부스트스랩 4.6 에서 activeClassName="active"  사용하지 않아도 된다. 
                    
                    activeClassName="active" 사용시 오류
                    */}
                    {/* 
                    <NavLink className="nav-link" to="/movies">Movies
                        <span className="sr-only">(current)</span>
                    </NavLink>
                    <NavLink className="nav-link" to="/users">Users</NavLink>



                    <NavLink className="nav-link" activeClassName="active" to="/movies">Movies
                        <span className="sr-only">(current)</span>
                    </NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/users">Users</NavLink> */}


                    <NavLink className={(navData) => (navData.isActive ? "nav-link active" : 'nav-link')} to="/movies">Movies
                        <span className="sr-only">(current)</span>
                    </NavLink>

                    <NavLink className={(navData) => (navData.isActive ? "nav-link active" : 'nav-link')} to="/users">Users</NavLink>

                </div>
            </div>
        </nav >
    );
};

export default Navbar;