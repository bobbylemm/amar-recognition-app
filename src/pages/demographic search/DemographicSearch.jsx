import React, { Component } from 'react';
import '../../App.css';
import '.././landingPage/landingPage.css';
import './style.css';
import Particles from 'react-particles-js'
import ImageLinkForm from '../../Components/ImageLinkForm/ImageLinkForm';
import Clarifai from 'clarifai';
import LoadingScreen from 'react-loading-screen';
import FaceRecognition from '../../Components/FaceRecognition/FaceRecognition';
import { CustomCard } from '../../Components/Customized card/CustomCard';

const app = new Clarifai.App({
    apiKey: '84d748537109485badfb633b96443b4a'
});
const optionsForParticles = {
    particles: {
        number: {
          value: 80,
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

class DemographicSearch extends Component {
constructor () {
    super();
    this.state = {
        input: '',
        imageUrl: '',
        validInput: false,
        faceBox: {},
        gender: '',
        age: '',
        race: '',
        loading: false,
        user: {
            id: '',
            name: '',
            email: '',
            password: '',
            searches: 0,
            joined: ''
          }
    }
}
updateUser = (user) => {
    this.setState({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      joined: user.joined
    })
    console.log(this.state.user)
  }
calculateFaceLocation = (data) => {
   const faceLocation = data.outputs[0].data.regions[0].region_info.bounding_box;
   const inputImage = document.getElementById('inputImage');
   const width = Number(inputImage.width);
   const height = Number(inputImage.height);
   console.log(width, height);
   return {
       leftCol: faceLocation.left_col * width,
       topRow: faceLocation.top_row * height,
       rightCol: width - (faceLocation.right_col * width),
       bottom: height - (faceLocation.bottom_row * height)
   }
}
displayFaceLocation = (faceBox) => {
    this.setState({faceBox});
    console.log(this.state.faceBox)
}
onInputChange = (event) => {
    this.setState({
        input: event.target.value
    });
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            loading: true,
            input: ''
        })
        if (this.state.input === '') {
            return this.setState({
                errorMessage: 'please put in some details'
            })
        }else {
            this.setState({
                errorMessage: ''
            })
        }
    this.setState({
        imageUrl: this.state.input,
        validInput: true,
        input: ''
    })
    app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input).then(response => {
        console.log(response.outputs[0].data.regions[0].data.face)
        this.displayFaceLocation(this.calculateFaceLocation(response));
        this.setState({
            age: response.outputs[0].data.regions[0].data.face.age_appearance.concepts[0].name,
            gender: response.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0].name,
            race: response.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[0].name,
            loading: false,
            input: ''
        })
        console.log(this.state)
        
    }).catch(err => {
        console.log(err);
    });
    }
    render () {
        return (
            // this is tht section that will display image searches for my page
            <div>
            <div className="page-header bg-color ankaraBg">
                <div className="filter"></div>
                <Particles className = 'particles' params = {optionsForParticles}/>
                    <div className="content-center">
                        <div className="container">
                            <div className="motto">
                                <div className="row">
                                    <div className="col-md-6 col-xs-12 ml-auto mr-auto text-center">
                                        <h2 className="pattern-title">Get more information about a person</h2>
                                        <h3 className = 'errorMessage'>{this.state.errorMessage}</h3>
                                        <div className="form-group">
                                            <ImageLinkForm value = {this.state.input} type="text" className="form-control border-input" onInputChange = {this.onInputChange} onSubmit = {this.onSubmit} placeholder="input url to detect face..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="wrapper">
                        <div className="main">
                            <div className="section section-white">
                                <div className="container">
                                {
                                    !this.state.validInput ? 
                                    <div className="row items-row">
                                        <div className="col-md-3 col-sm-12 col-xs-12 ml-auto">
                                            <CustomCard src={require('./img/facesBg.jpg')} />
                                        </div>
                                        <div className="col-md-3 col-sm-12 col-xs-12 ml-auto">
                                            <CustomCard src={require('./img/section-img1.jpg')} />
                                        </div>
                                                
                                        <div className="col-md-3 col-sm-12 col-xs-12 ml-auto">
                                            <CustomCard src={require('./img/facesBg.jpg')} />
                                        </div>
                                    </div>
                                : <LoadingScreen
                                loading={this.state.loading}
                                bgColor='transparent'
                                spinnerColor='#9ee5f8'
                                textColor='#676767'
                                logoSrc={require('./img/loader.gif')}
                                text='Analyzing the image'
                                ><FaceRecognition id = {'inputImage'} faceBox = {this.state.faceBox} src = {this.state.imageUrl} gender = {this.state.gender} age = {this.state.age} race = {this.state.race} />
                                </LoadingScreen>
                            }
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default DemographicSearch;