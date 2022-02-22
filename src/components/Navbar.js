import React from "react";
import { Link,NavLink } from "react-router-dom";

const Navbar = (props) => {
    
    return <React.Fragment>
        <nav className="navbar navbar-expand sm navbar-dark bg-dark mb-4">
            <div className="container">
                <Link to="/" className="navbar-brand"><span className="fa-solid fa-calculator"></span> Expense Tracker</Link>

                <button className="navbar-toggler" data-toggle="collapse" data-target="#navCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navCollapse">
                    <ul className="navbar-nav items-right">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/about" className="nav-link">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </React.Fragment>
}

export default Navbar;