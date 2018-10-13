import React from 'react';
import '../../pages/landingPage/landingPage.css';
import '../../App.css';

export const Footer = () => {
    return (
        <div>
            <footer className="footer footer-big">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-6 ">
                            <div className="links">
                                <ul className="uppercase-links">
                                    <li>
                                        <a href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Face-recognition
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                        Ankara Recognition
                                        </a>
                                    </li>
                                </ul>
                                <hr />
                                <div className="copyright">
                                    © put the date here, made with <i className="fa fa-heart heart"></i> by Dozickovich
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xs-6">
                            <h3>Amar Recognition</h3>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}