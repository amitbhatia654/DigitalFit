import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <Link className="" href="/"><span className='mylogo'>Digital<span className='mylogo1'>Fit</span></span>
                        <br></br>
                        <span className='mylogo2 fw-light mx-1'> IT SERVICES</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4 text mx-auto">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <NavLink to={''} className="nav-link active" aria-current="page">Home</NavLink>

                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a> */}
                                <NavLink to={'/about'} className="nav-link">About Us</NavLink>
                            </li>

                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a> */}
                                <NavLink to={'/services'} className="nav-link">Services</NavLink>
                            </li>


                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Landing Page</a></li>
                                    <li><a className="dropdown-item" href="/">Blogging Website</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Personal Portfolio</a></li>
                                </ul>
                            </li> */}
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a> */}
                                <NavLink to={'/about'} className="nav-link">Blogs</NavLink>
                            </li>

                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a> */}
                                <NavLink to={'/about'} className="nav-link">Contact Us</NavLink>
                            </li>

                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}

                        <button className='hirebtn btn'>Start a project</button>


                    </div>
                </div>
            </nav>





        </div>
    )
}
