import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import LandingPage from '../pages/landingPage/LandingPage';
import Navigation from './Navigation/Navigation';
import SignIn from '../pages/sign in/SignIn';
import SignUp from '../pages/sign up/SignUp';
import AnkaraSearch from '../pages/ankara search/AnkaraSearch';
import DemographicSearch from '../pages/demographic search/DemographicSearch';
import NavbarTwo from './nav bar two/NavbarTwo';

const RouteList = (props) => {
console.log(props)
    return (
        <div>
                    {/* {console.log(Router.props)} */}
                    {
                        props.location.pathname === '/home' || props.location.pathname === '/demographic-search' || props.location.pathname === '/ankara-search' ? <Navigation /> : <NavbarTwo />
                    }
                    <Route path = '/home' component = {LandingPage}/>
                    <Route path = '/demographic-search' component = {DemographicSearch}/>
                    <Route exact path = '/' component = {SignIn}/>
                    <Route path = '/sign-up' component = {SignUp}/>
                    <Route path = '/ankara-search' component = {AnkaraSearch} />
                </div>
    )
}
const RoutListWithROuter = withRouter(RouteList)
class Main extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        console.log('complete location',this.props);
        return (
            <BrowserRouter>
                <RoutListWithROuter />
            </BrowserRouter>
        )
    }
}
export default Main;