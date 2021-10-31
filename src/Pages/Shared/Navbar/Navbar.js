import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './navbar.css'
const Navbar = () => {
    const{user, logOut} = useAuth();
    console.log(user)
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                <div class="container">
                    <Link class="navbar-brand" to="/"><b>Travel</b>Hero</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link class="nav-link"  to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link "  to="/tour">Tour</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link "  to="/destination">Destination</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link "  to="/nearcity">Nearest City</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/home#aboutus">About Us</Link>
                        </li>
                    </ul>

                    {/* User Profile  */}

                    {user?.email ?
                    <ul className="navbar-nav">
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" to="/login" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {user.displayName} <img className=" nav-photo" width="30" height="30" src={user.photoURL} alt="" />
                            </Link>
                            <ul class="dropdown-menu text-right bg-dark nav-dropdown text-light" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" to="">{user.email}</Link></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><Link class="dropdown-item" to="/admin">Dashboard</Link></li>
                                <li><Link class="dropdown-item" to="/addtour">Add Tour</Link></li>
                                <li><button onClick={logOut} class="dropdown-item" to="/admin">Log out</button></li>
                            </ul>
                        </li>
                    </ul>
                    :
                     <ul className="navbar-nav">
                        <li class="nav-item dropdown">
                         <Link class="nav-link dropdown-toggle" to="/login" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Login
                         </Link>
                         <ul class="dropdown-menu  text-right bg-dark nav-dropdown text-light" aria-labelledby="navbarDropdown">
                             <li><Link class="dropdown-item" to="/login">Log In</Link></li>
                             <li><Link class="dropdown-item" to="register">Register</Link></li>
                         </ul>
                         </li>
                     </ul>
                }




                    </div>
                </div>
        </nav>
        </div>
    );
};

export default Navbar;