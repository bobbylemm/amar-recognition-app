import React from 'react';
import Tilt from 'react-tilt';
import logo from './img/logo.svg';
import './style.css';

const Logo = () => {
    return (
        <div className = 'ma4 mt0'>
            <Tilt className = 'Tilt' options={{ max : 40 }} style={{ height: 50, width: 50 }} >
                <div className="Tilt-inner pa2"><img className = 'logo' id = 'logo' alt = '' src = {logo}/><span></span>amar-recogniton</div>
            </Tilt>
        </div>        
    );
}
export default Logo;