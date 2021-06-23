import React from 'react';

import bodyCSS from './body.module.css'

import AboutPicMobile from '../../assets/about/mobile/image-hero-whitecup.jpg'
import AboutPicTablet from '../../assets/about/tablet/image-hero-whitecup.jpg'
import AboutPicDesktop from '../../assets/about/desktop/image-hero-whitecup.jpg'

import Intro from './Intro/Intro'
import Commitment from './Commitment/Commitment'
import Quality from './Quality/Quality'
import Footer from '../footer/Footer'


function About() {

    const introHeadline= "About Us"
    const introParagraph = "Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."

    const picArray = [
        {type: "DESKTOP", pic: AboutPicDesktop },
        {type: "TABLET", pic: AboutPicTablet },
        {type: "MOBILE", pic: AboutPicMobile },
    ]

    return (
        <div className={bodyCSS.bodyWrapper}>
            <Intro headline={introHeadline} paragraph={introParagraph} pictureArr={picArray} btn={false} headlineSize="sm" />
            <Commitment />
            <Quality /> 
            <div className={bodyCSS.push}></div>
            
        </div>
    )
}

export default About;