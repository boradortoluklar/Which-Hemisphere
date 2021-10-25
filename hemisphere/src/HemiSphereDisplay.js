import React from 'react';
import northernPic from './image/NorthernHemisphere.jpg';
import southernPic from './image/SouthernHemisphere.jpg';
import './Hemisphere.css';

const hemisephereCofig = {
    Northern :{
        text : 'It is Northern hemisphere',
        picture: northernPic

    },
    Southern : {
        text: 'It is Southern hemisphere',
        picture: southernPic

    }
}

const HemiSphereDisplay = ({ latitude }) => {

    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';   
     const{text,picture} = hemisephereCofig[hemisphere]
    
    return(
        <div className = {hemisphere}>
            <div className = 'ui raised text container segment'>
                <div className='image'>
                <img src = {picture} alt = "hemisphere picture"/>
                </div>
                <div className = 'ui teal bottom attached label'>
                  <h1>{text}</h1>  
                </div>  
            </div> 
        </div>
    )
}
export default HemiSphereDisplay;