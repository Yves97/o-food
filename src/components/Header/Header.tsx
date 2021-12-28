import React from "react"
import { Link } from "react-router-dom";

type HeaderProps = {
    title?:string,
}

export const Header = ({title} :HeaderProps) =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <p className="navbar-brand">O'Food</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/menu">Nos menus</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Submit</Link>
                    </li>
                </ul>
                </div>
            </div>
         </nav>
    )
}