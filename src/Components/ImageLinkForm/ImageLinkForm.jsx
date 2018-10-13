import React from 'react';
import '../../App.css';
import './style.css';

const ImageLinkForm = ({ onInputChange, onSubmit, placeholder, value }) => {
    return (
        <div className = 'search-bar'>
            <input value = {value} type="text" className="textbox" placeholder={placeholder} onChange = {onInputChange}/>
            <input title="Search" value="" type="submit" class="search-button" onClick = {onSubmit} />
        </div>
    )
}
export default ImageLinkForm;