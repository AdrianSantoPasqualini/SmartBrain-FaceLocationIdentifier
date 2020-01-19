import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import brain from './icons8-cute-color-100.png';

const Logo = () => {
    return (
        <div className="ma4 Logo">
            <Tilt className="Tilt  shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3 tc"> 
                    <img src={brain} alt='logo'style={{ paddingTop: "5px" }}/>
                </div>
            </Tilt>
        </div>
      );
}  

export default Logo;