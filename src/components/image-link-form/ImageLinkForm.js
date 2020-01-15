import React from 'react';
import './imagelinkform.styles.scss';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => (
    <div>
        <p className='center image-link-text'>
            This Magic Brain will detect faces in your pictures. Give it a try!
        </p>
        <div className='center'>
            <div className=' center input-box'>
                <input className='text-box'type='text' onChange={ onInputChange }/>
                <button className='text-button' onClick={ onButtonSubmit }>Detect</button>
            </div>
        </div>
    </div>
);

export default ImageLinkForm;