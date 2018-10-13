import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import LandingPage from './pages/landingPage/LandingPage';
import SignUp from './pages/sign up/SignUp';
import AnkaraSearch from './pages/ankara search/AnkaraSearch';
import SignIn from './pages/sign in/SignIn';
import DemographicSearch from './pages/demographic search/DemographicSearch';

class App extends Component {
constructor (props) {
  super(props);
  this.state = {
    user: {
      id: '',
      name: '',
      email: '',
      password: '',
      searches: 0,
      joined: ''
    }
  }
  console.log('hello');
}
updateUser = (user) => {
  this.setState({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    joined: user.joined
  })
}

  render() {
    return (
      <div className="App">
        <Navigation />
        <LandingPage />
        <SignUp updateUser = {this.updateUser} />
        <SignIn />
        <AnkaraSearch />
        <DemographicSearch />
      </div>
    );
  }
}

export default App;
