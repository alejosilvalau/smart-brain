import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import neuron from './neuron.png';

const Logo = () => {
    return (
        <div className='ma4 mt0 '>
            <Tilt className="Tilt br300 shadow-2" options={{ max : 35 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop:'1px'}} src={neuron} alt='Logo'/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;