import React, { Component } from 'react';
import '../../App.css';
import './style.css';
import axios from 'axios';
import Particles from 'react-particles-js';
import Noty from 'noty';
import '../../../node_modules/noty/lib/noty.css';
// import '../../../node_modules/noty/lib/themes/mint.css';
import '../../../node_modules/noty/lib/themes/bootstrap-v4.css';


const optionsForParticles = {
    particles: {
        number: {
          value: 90,
          density: {
            enable: true,
            value_area: 700
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 50,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 200,
            size: 20,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
        }
      },
}

class SignIn extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        console.log('sign in',props)
    }

    handleSignInInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSignIn = (e) => {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('https://frozen-garden-26563.herokuapp.com/sign-in', user).then(response => {
          console.log('registered user',response.data.name);
          if (response.status === 200) {
            new Noty({
              type: 'success',
              theme: 'bootstrap-v4',
              layout: 'centerRight',
              text: 'successfully logged in',
              timeout: 3000
              }).show();
           this.props.history.push('/home')
          }else {
            return;
          }
        }).catch(err => {
          new Noty({
            type: 'error',
            theme: 'bootstrap-v4',
            layout: 'centerRight',
            text: 'wrong credentials',
            timeout: 3000
            }).show();
        })
    }
    render() {
        return (
            <div className="wrapper">
                <div style = {{'background': '#29335C', 'height': '100vh'}}>
                    <div className="filter"></div>
                    <div className="container">
                    <Particles className = 'particles' params = {optionsForParticles}/>
                        <div className="row">
                            <div className="col-md-4 col-sm-6 ml-auto mr-auto">
                                <div className="card card-register">
                                    <h4 className="card-title text-center">Please Sign in</h4>
                                    <form className="register-form">
                                        <label>Email</label>
                                        <input onChange = {this.handleSignInInput} name = 'email' value = {this.state.email} type="email" className="form-control no-border" placeholder="Email" />

                                        <label>Password</label>
                                        <input onChange = {this.handleSignInInput} name = 'password' value = {this.state.password} type="password" className="form-control no-border" placeholder="Password" />
                                        <button className="btn btn-danger btn-block btn-round" onClick = {this.onSignIn}>Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignIn;