import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const  Navbar = () => {
    return (
        <>
            <nav className="navbar-component pg-primary">
                <h3> 
                    <i className="fab fa-github"></i> Github Finder 
                </h3>
            
            <ul>        
                <li> <Link to="/"> Home </Link> </li>
                <li> <Link to="/about"> About </Link> </li>
            </ul>
            </nav>
        </>
    );
}

export default Navbar;
