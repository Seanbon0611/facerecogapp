import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './logo.styles.scss';

const Logo = () => (
    <div className='logo'>
        <Tilt className='Tilt' options={{ max: 55 }} style={{ height: 150, width: 150 }} >
            <div className='Tilt-inner'>
                <img style={{paddingTop: '5px'}} alt='logo' src={brain} />
            </div>
        </Tilt>
    </div>
);

export default Logo;