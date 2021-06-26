import React from 'react';

import useDimensions from '../../utility/sizing/useDimensions';
import qualityCSS from './quality.module.css'
import mobilePic from '../../../assets/about/mobile/image-quality.jpg'
import tabletPic from '../../../assets/about/tablet/image-quality.jpg'
import desktopPic from '../../../assets/about/desktop/image-quality.jpg'


const Headline = () => {
    return (
        <h4 className={qualityCSS.headline}>Uncompromising quality</h4>
    )
}

const Paragraph = () => {
    return (
        <p className={qualityCSS.paragraph}>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
    )
}



function Quality() {
    const {width, height} = useDimensions()

    function getImage(width) {
        if(width < 768) {
            return <img className={qualityCSS.picture} src={mobilePic} alt={`Coffee Quality Mobile`} /> 
        } else if (width < 1025) {
            return <img className={qualityCSS.picture} src={tabletPic} alt={`Coffee Quality Tablet`} /> 
        } else {
            return <img className={qualityCSS.picture} src={desktopPic} alt={`Coffee Quality Desktop`} /> 
        }  
}
    return (
        <div className={qualityCSS.container}>
            {getImage(width)}
            <div className={qualityCSS.textContainer}>
                <Headline key="Quality_Headline" />
                <Paragraph key="Quality_Paragraph" />
            </div>
            
        </div>
    )
}

export default Quality;