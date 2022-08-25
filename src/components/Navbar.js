/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Home</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" href="#">Movies <span class="sr-only">(current)</span></a>
                    <a class="nav-link" href="#">Users</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;