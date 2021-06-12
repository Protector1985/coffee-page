import React from 'react';
import CoffeePressPictureMobile from '../../../assets/home/mobile/image-hero-coffeepress.jpg'
import CoffeePressPictureTablet from '../../../assets/home/tablet/image-hero-coffeepress.jpg'
import CoffeePressPictureDesktop from '../../../assets/home/desktop/image-hero-coffeepress.jpg'
import introCSS from './intro.module.css'
import {Button} from 'reactstrap'

import useDimensions from '../../utility/sizing/useDimensions'

function Intro() {
    
    const {width, height} = useDimensions()
    function getImage(width) {

        if(width < 768) {
            return <img className={introCSS.picture} src={CoffeePressPictureMobile} alt="Coffee Press Mobile" /> 
        } else if (width < 1024) {
            return <img className={introCSS.picture} src={CoffeePressPictureTablet} alt="Coffee Press Tablet" /> 
        } else {
            return <img className={introCSS.picture} src={CoffeePressPictureDesktop} alt="Coffee Press Desktop" />
        }

    }


    return (
     
            <div className={introCSS.pictureContainer}>
            {getImage(width)}
                <div className={introCSS.text}>
                    <h1 className={introCSS.headline}>Great coffee made simple.</h1>
                    <p className={introCSS.paragraph}>Start your mornings with the world’s best coffees. Try our expertly curated artisan 
                                                    coffees from our best roasters delivered directly to your door, at your schedule.</p>
                <Button className={introCSS.planButton} variant="custom">Create your plan</Button>
                </div>
       
            
            
            
        
        </div>

    ) 
}

export default Intro;