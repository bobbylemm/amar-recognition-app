import React, { Component } from 'react';
import '../../App.css';
import './landingPage.css';
import { CustomCard } from '../../Components/Customized card/CustomCard';
import { Footer } from '../../Components/Footer/Footer';

class LandingPage extends Component {

    // componentWillMount() {
    //     this.props.history.push('/sign-in');
    // }
    render () {
        return (
            <div>
            <div className="page-header bg-color bg-img">
                <div className="filter"></div>
                <div className="content-center">
                    <div className="container">
                        <div className="motto">
                            <div className = 'title-container'>         
                                <span className="hero-title"> Amar recognition </span>
                            </div>
                            <div className="svg-wrapper">
                                <svg height="60" width="526" xmlns="http://www.w3.org/2000/svg">
                                    <rect className="shape" height="60" width="515" />
                                </svg>
                                <div className="hero-description">making identification easier</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* this is the end of the hero section */}
            {/* this is the beginning of the call to action section */}
            <div className="section section-white" id = 'how-to-use'>
    	<div className="container">
        <div className = 'text-center h1 mb-5'>How to use</div>
			<div className="row">
				<div className="col-md-4 col-xs-12">
                    <CustomCard src = {require('./img/choose.svg')} cardTitle = {'Choose the type of search you want'} cardDescription = {'Amar recognition has three free searches available that everybody can benefit from. the face-detection search, the ankara-recogtion search and the patterns and textures search'} />
				</div>

				<div className="col-md-4 col-xs-12">
                    <CustomCard src = {require('./img/url.svg')} cardTitle = {'Insert the url of the image'} cardDescription = {'amar-recognition is still in beta testing so it only accepts url of the image you want to do a search on, any image url is acceptable so long has it is a secure url.'} />
				</div>

				<div className="col-md-4 col-xs-12">
                    <CustomCard src = {require('./img/results.svg')} cardTitle = {'Get results to your search'} cardDescription = {'amar-recognition takes a couple of seconds to get your search result ready, once your search results are ready it will be displayed on the page with more information about the image.'} />
				</div>
			</div>
    	</div>
    </div>
    {/*  */}
        {/* this is the begginning of the pre footer */}
        <div className="social-line social-line-black">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xs-12">
                        <h4 className="title">Follow Us</h4>
                    </div>
                    <div className="col-md-2 col-xs-3">
                        <a href="" className="btn btn-link btn-neutral">
                        <i className="fab fa-twitter"></i> Twitter
                        </a>
                    </div>
                    <div className="col-md-2 col-xs-3">
                        <a href="" className="btn btn-link btn-neutral">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                    </div>
                    <div className="col-md-2 col-xs-3">
                        <a href="" className="btn btn-link btn-neutral">
                            <i className="fab fa-youtube"></i> Youtube
                        </a>
                    </div>
                    <div className="col-md-2 col-xs-3">
                        <a href="" className="btn btn-link btn-neutral">
                            <i className="fab fa-google"></i> Google+
                        </a>
                    </div>
                </div>
            </div>
        </div>
            {/* this is the beginning of the footer section */}
            <Footer />
            </div>
        )
    }
}
export default LandingPage;