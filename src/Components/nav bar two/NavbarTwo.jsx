import React, { Component } from 'react';
import '../../App.css';
import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';

class NavbarTwo extends Component { 
    render () {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-transparent nav-down" color-on-scroll="500">
                <div className="container">
                    <div className="navbar-translate">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/"><Logo /></Link>
                        </div>
                        <button className="navbar-toggler navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar"></span>
                            <span className="navbar-toggler-bar"></span>
                            <span className="navbar-toggler-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mr-3">
                                <Link to="/sign-up">
                                    <div className="signOut-button">
                                        <span className="signOut-button_mask"></span>
                                        <span className="signOut-button_text">Sign up</span>
                                        <span className="signOut-button_text signOut-button_text--bis">Sign up</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/">
                                    <div className="signOut-button">
                                        <span className="signOut-button_mask"></span>
                                        <span className="signOut-button_text">Sign in</span>
                                        <span className="signOut-button_text signOut-button_text--bis">Sign in</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}
}
export default NavbarTwo;