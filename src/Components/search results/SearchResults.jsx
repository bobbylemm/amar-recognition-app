import React from 'react';
import '../../App.css';
import './style.css';

//this is the component that will dispplay the search results 
const SearchResults = (props) => {
    return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className = 'searchedImage'>
                            <img src = {props.src}/>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className = 'searchDetails'>
                            <h2>Your Search will likely be</h2>
                            <hr />
                            <div className="searchPrediction">{props.searchName}</div>
                            <span><button type = 'button' className = 'btn btn-black' onClick = {props.showMoreDetails}>{props.buttonTitle}</button></span>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default SearchResults;