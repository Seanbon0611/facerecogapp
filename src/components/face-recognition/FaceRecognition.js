import React from 'react';
import './face-recognition.styles.scss';

const FaceRecognition = ({ imageUrl, box }) => (
    <div className='center'>
      <div className='image-container'>
        <img id='input-image' alt='' src={imageUrl} width='500px' height='auto' />
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
);

export default FaceRecognition;