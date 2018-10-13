import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import LandingPage from './pages/landingPage/LandingPage';
import Navigation from './Components/Navigation/Navigation';
import SignIn from './pages/sign in/SignIn';
import SignUp from './pages/sign up/SignUp';
import AnkaraSearch from './pages/ankara search/AnkaraSearch';
import DemographicSearch from './pages/demographic search/DemographicSearch';
import Main from './Components/Main';

ReactDOM.render(
    // <BrowserRouter>
    // <div>
    // <Navigation />
    //     <Route exact path = '/' component = {LandingPage}/>
    //     <Route path = '/demographic-search' component = {DemographicSearch}/>
    //     <Route path = '/sign-in' component = {SignIn}/>
    //     <Route path = '/sign-up' component = {SignUp}/>
    //     <Route path = '/ankara-search' component = {AnkaraSearch} />
    // </div>
    // </BrowserRouter>
    <Main />
, document.getElementById('root'));
registerServiceWorker();
