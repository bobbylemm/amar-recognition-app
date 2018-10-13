import React from 'react'
import '../../App.css';

// this is the component that will receive the image searched for, so it should be mounted on the 'search results component'

const ImageRecogniton = () => {
    return (
        <div className = 'center'>
            <img src = {imgUrl} />
        </div>
    );  
}
export default ImageRecogniton;