import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
export default function Navbar(props) {
    const [themeName,setThemeName] = useState("Light");
    return (
        <>
            <nav className={`navbar navbar-expand-lg custom-${props.mode} navbar-${props.mode} bg-gradient`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        <div className="btn-group  mx-5">
                            <button id="theme" type="button" className={`btn btn-${props.mode} dropdown-toggle`} data-bs-toggle="dropdown" aria-expanded="false">
                                {themeName} theme
                            </button>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item" onClick={()=>{setThemeName("Light");props.toggleMode('light')}}>Light theme</li>
                                <li className="dropdown-item" onClick={()=>{setThemeName("Dark");props.toggleMode('dark')}}>Dark theme</li>
                                <li className="dropdown-item" onClick={()=>{setThemeName("Red");props.toggleMode('danger')}}>Red theme</li>
                                <li className="dropdown-item" onClick={()=>{setThemeName("Blue");props.toggleMode('primary')}}>Blue theme</li>
                                <li className="dropdown-item" onClick={()=>{setThemeName("Green");props.toggleMode('success')}}>Green theme</li>
                                <li className="dropdown-item" onClick={()=>{setThemeName("Yellow");props.toggleMode('warning')}}>Yellow theme</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
    title: "Navbar",
    about: "About"
}