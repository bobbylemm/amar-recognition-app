import React from 'react';
import './style.css';

const FaceRecognition = ({ src, faceBox, id, gender, race, age }) => {
    return (
        <div className = 'container'>
            <div className="row">
                <div className="col-md-5">
                    <div className = 'searchedImage'>
                        <img id = {id} src = {src} />
                        <div className = 'bounding-box' style = {{top: faceBox.topRow, right: faceBox.rightCol,left: faceBox.leftCol, bottom: faceBox.bottom}}></div>
                    </div>
                </div>
                <div className="col-md-7 demographics">
                    <div className = 'row'>
                        <div className = 'col-md-4'>
                            <div className = 'col demographic-header'>
                                Gender
                            </div>
                            <div className = 'col demographic-details'>
                                {gender}
                            </div>
                        </div>
                        <div className = 'col-md-4'>
                            <div className = 'col demographic-header'>
                                Race
                            </div>
                            <div className = 'col demographic-details'>
                               {race}
                            </div>
                        </div>
                        <div className = 'col-md-4'>
                            <div className = 'col demographic-header'>
                                Age
                            </div>
                            <div className = 'col demographic-details'>
                                {age}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FaceRecognition;