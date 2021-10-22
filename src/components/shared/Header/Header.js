import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">My To-do List</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="nav">
                    <li className="nav-item">
                    <Link to="/" className="nav-link" >Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/tasks" className="nav-link" >Tasks</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;