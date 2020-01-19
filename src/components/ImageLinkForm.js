import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonChange}) => {
    return (
        <div className="tc">
            <p className="f3">This Magic Brain will detect faces in your pictures. Give it a try.</p>
            <div className='center'>
                <div className="pa4 br3 shadow-5 form" style={{width: "700px"}}>
                    <input className="f4 pa2 w-70" type="text" onChange={onInputChange}></input>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonChange}>Detect</button>
                </div>
                
            </div>
        </div>
      );
}  

export default ImageLinkForm;