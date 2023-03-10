import React from "react";
import {Link} from "react-router-dom";


function NavBar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" href="#">Navbar</Link>
        </nav>
    );
}

export default NavBar;