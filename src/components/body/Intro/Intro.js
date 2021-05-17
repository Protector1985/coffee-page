import React from 'react';
import CoffeePressPicture from '../../../assets/home/mobile/image-hero-coffeepress.jpg'
import introCSS from './intro.module.css'

function Intro() {
    return (
        <div className={introCSS.pictureContainer}>
            <img className={introCSS.picture} src={CoffeePressPicture} alt="Girl in a jacket" /> 
            <div className={introCSS.text}>
                <h1 className={introCSS.headline}>Great coffee made simple.</h1>
                <p className={introCSS.paragraph}>Start your mornings with the world’s best coffees. Try our expertly curated artisan 
                                                  coffees from our best roasters delivered directly to your door, at your schedule.</p>
            </div>
            
            
            
        
        </div>

    ) 
}

export default Intro;