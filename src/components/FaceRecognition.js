import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ boxes, imageUrl}) => {

    const faceBorders = boxes.map((box, i) => {
        return <div key={i} className="bounding-box" style={{top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol}}></div>
    });

    return (
        <div className="center ma2" >
            <div className='absolute mt2'>
                <img id="inputimage" className="shadow-5" style={{width: "500px", height: "auto"}} alt="" src={imageUrl}/>
                {faceBorders}
            </div>
        </div>
      );
}  

export default FaceRecognition;
