import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg p-3">
            <div className="container-fluid">
                <Link className="navbar-brand d-none d-md-inline-block" to="/"><img src="./images/logo.png" style={{height: "40px", width: "150px"}}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item list-item">
                            <Link className="nav-link  active ml-5" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  active" to="/courses">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  active" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <form class="d-none d-md-flex ml-auto w-100 w-md-50">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        </>
    )   
}