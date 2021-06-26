import React from 'react'

import Intro from './Intro/Intro'
import Howsection from './Howsection/Howsection'
import bodyCSS from './body.module.css'

import mobilePic from '../../assets/plan/mobile/image-hero-blackcup.jpg'
import tabletPic from '../../assets/plan/tablet/image-hero-blackcup.jpg'
import desktopPic from '../../assets/plan/desktop/image-hero-blackcup.jpg'


function CreatePlan(props) {
    const headline = "Create a plan";
    const paragraph = "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."

    const picArray = [
        {type: "DESKTOP", pic: desktopPic },
        {type: "TABLET", pic:  tabletPic},
        {type: "MOBILE", pic: mobilePic },
    ]

    return(
        <div className={bodyCSS.bodyWrapper}>
             <Intro headline={headline} paragraph={paragraph} pictureArr={picArray} btn={false} headlineSize="lg" />
             <Howsection theme="dark"/>
        </div>
    )
}

export default CreatePlan;
