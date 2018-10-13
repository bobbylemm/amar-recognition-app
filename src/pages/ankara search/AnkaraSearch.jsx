import React, { Component } from 'react';
import LoadingScreen from 'react-loading-screen';
import '../../App.css';
import '.././landingPage/landingPage.css';
import './style.css';
import Particles from 'react-particles-js'
import ImageLinkForm from '../../Components/ImageLinkForm/ImageLinkForm';
import Clarifai from 'clarifai';
import SearchResults from '../../Components/search results/SearchResults';
import SearchDetails from '../../Components/Search details/SearchDetails';
import { CustomCard } from '../../Components/Customized card/CustomCard';
// import {Footer } from '../../Components/Footer/Footer';

const app = new Clarifai.App({
    apiKey: '84d748537109485badfb633b96443b4a'
});
const optionsForParticles = {
    particles: {
        number: {
            value: 90,
            density: {
                enable: true,
                value_area: 900
            }
        }
    }
}

class AnkaraSearch extends Component {
constructor () {
    super();
    this.state = {
        input: '',
        imageUrl: '',
        validInput: false,
        searchName: '',
        loading: false,
        showMoreDetails: false,
        notFoundMessage: false,
        dashikiTexture: '',
        dashikiDurability: '',
        dashikiRatings: '',
        kenteTexture: '',
        kenteDurability: '',
        kenteRatings: '',
        davivaTexture: '',
        davivaDurability: '',
        davivaRatings: ''
    }
}
onInputChange = (event) => {
    this.setState({
        input: event.target.value
    });
    }
    showMoreDetails = () => {
        console.log('working');
        if (this.state.searchName === '') {
            return;
        }
        this.setState({
            showMoreDetails: !this.state.showMoreDetails
        })
        console.log(this.state.showMoreDetails);
    }
    onSubmit = (e) => {
        e.preventDefault();
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
        loading: true,
        notFoundMessage: false
    })
    app.models.predict({id:'African_ankara_fabric', version:'3cda10d89e4a46acbc973bbdf613de47'}, this.state.input).then(response => {
        console.log(response, response.outputs[0].data.concepts[0].value);
        console.log(this.state)
        if (response.outputs[0].data.concepts[0].value >= 0.3) {
            if (response.outputs[0].data.concepts[0].name == 'dashiki') {
                this.setState({
                    dashikiTexture: 'cotton',
                    dashikiDurability: '1 year',
                    dashikiRatings: 8.2,
                    searchName: response.outputs[0].data.concepts[0].name,
                    loading: false,
                    input: ''
                })
            }else if (response.outputs[0].data.concepts[0].name == 'kente') {
                this.setState({
                    kenteTexture: 'chiffon',
                    kenteDurability: '8 months',
                    kenteRatings: 6.3,
                    searchName: response.outputs[0].data.concepts[0].name,
                    loading: false,
                    input: ''
                })
            }else if (response.outputs[0].data.concepts[0].name == 'da-viva ankara') {
                this.setState({
                    davivaTexture: 'cotton',
                    davivaDurability: '1 year',
                    davivaRatings: 7.8,
                    searchName: response.outputs[0].data.concepts[0].name,
                    loading: false,
                    input: ''
                })
            }else {
                return;
            }
            // return this.setState({
            //     searchName: response.outputs[0].data.concepts[0].name,
            //     loading: false,
            //     input: ''
            // })
        }else if (response.outputs[0].data.concepts[0].value <= 0.3) {
            this.setState({
                notFoundMessage: true,
                loading: false,
                input: ''
            })
        }else {
            return this.setState({
                notFoundMessage: true
            })
        }
        console.log('this is the new state',this.state)
    })
    .catch(err => {
        console.log(err);
    })
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
                                        <h2 className="pattern-title">Get more information about that ankara fabric</h2>
                                        <h3 className = 'errorMessage'>{this.state.errorMessage}</h3>
                                        <div className="form-group">
                                            <ImageLinkForm value = {this.state.input} type="text" className="form-control border-input" onInputChange = {this.onInputChange} onSubmit = {this.onSubmit} placeholder="input ankara url here ..." />
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
                                    <CustomCard src={require('./img/da viva.jpg')} />
                                </div>
                                <div className="col-md-3 col-sm-12 col-xs-12">
                                    <CustomCard src={require('./img/kente.png')} />
                                </div>
                                <div className="col-md-3 col-sm-12 col-xs-12 mr-auto">
                                    <CustomCard src={require('./img/dashiki.png')} />
                                </div>
                            </div>
                            : 
                            <LoadingScreen
                                    loading={this.state.loading}
                                    bgColor='transparent'
                                    spinnerColor='#9ee5f8'
                                    style = {{'height': '100vh'}}
                                    textColor='#676767'
                                    logoSrc={require('./img/loader.gif')}
                                    text='Analyzing the image'
                                >{
                                    this.state.notFoundMessage ? <div height = '100vh' style = {{'fontSize': '2.2rem', 'text-align': 'center', 'color': 'red', 'height': '100vh'}}>error analyzing image</div> : <SearchResults src = {this.state.imageUrl} searchName = {this.state.searchName} showMoreDetails = {this.showMoreDetails} buttonTitle = {this.state.showMoreDetails ? 'hide details': 'more details'} />
                                }
                                {
                                    this.state.showMoreDetails ?
                                    <SearchDetails texture = {this.state.dashikiTexture !== '' ? this.state.dashikiTexture :  this.state.kenteTexture !== '' ? this.state.kenteTexture : this.state.davivaTexture !== '' ? this.state.davivaTexture : null } ratings = {this.state.dashikiRatings !== '' ? this.state.dashikiRatings : this.state.kenteRatings !== '' ? this.state.kenteRatings : this.state.davivaRatings !== '' ? this.state.davivaRatings : null } durability = {this.state.dashikiDurability !== '' ? this.state.dashikiDurability : this.state.kenteDurability !== '' ? this.state.kenteDurability : this.state.davivaDurability !== '' ? this.state.davivaDurability : null } /> : <div>{}</div>
                                }
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
export default AnkaraSearch;
