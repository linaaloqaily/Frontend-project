import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
        <img src="https://logos-world.net/wp-content/uploads/2020/10/SoundCloud-Logo.png" alt="logo" className="logo"/>
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/home"> Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/about"> About us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/contact"> Contact us</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
  )
}

export default Navbar