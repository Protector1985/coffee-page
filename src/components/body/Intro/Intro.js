import React from 'react';
import CoffeePressPicture from '../../../assets/home/mobile/image-hero-coffeepress.jpg'
import introCSS from './intro.module.css'

function Intro() {
    return (
        <div className={introCSS.pictureContainer}>
            <img className={introCSS.picture} src={CoffeePressPicture} alt="Girl in a jacket" /> 
            <div className={introCSS.text}>
                <h1>Great coffee made simple.</h1>
            </div>
            
            
            
        
        </div>

    ) 
}

export default Intro;