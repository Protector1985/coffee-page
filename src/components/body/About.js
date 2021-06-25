import React from 'react';

import bodyCSS from './body.module.css'

//picture/svg imports
import AboutPicMobile from '../../assets/about/mobile/image-hero-whitecup.jpg'
import AboutPicTablet from '../../assets/about/tablet/image-hero-whitecup.jpg'
import AboutPicDesktop from '../../assets/about/desktop/image-hero-whitecup.jpg'

//component imports
import Intro from './Intro/Intro'
import Commitment from './Commitment/Commitment'
import Quality from './Quality/Quality'
import Headquarters from './Headquarters/Headquarters'
import Footer from '../footer/Footer'


import {ReactComponent as Australia} from '../../assets/about/desktop/illustration-australia.svg'
import {ReactComponent as Canada} from '../../assets/about/desktop/illustration-canada.svg'
import {ReactComponent as Uk} from '../../assets/about/desktop/illustration-uk.svg'
import { isTerminatorless } from '@babel/types';

function About() {

    const introHeadline= "About Us"
    const introParagraph = "Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."

    const picArray = [
        {type: "DESKTOP", pic: AboutPicDesktop },
        {type: "TABLET", pic: AboutPicTablet },
        {type: "MOBILE", pic: AboutPicMobile },
    ]

    const headquartersArr = [
        {pic:Uk, headline:"United Kingdom", street:"68  Asfordby Rd", city: "Alcaston", state: "SY6", zip:"1YA", phone: "+44 1241 918425"},
        {pic:Canada, headline:"Canada", street:"1528  Eglinton Avenue", city: "Toronto", state: "Ontario", zip:"M4P 1A6", phone: "+1 416 485 2997"},
        {pic:Australia, headline:"Australia", street:"36 Swanston Street", city: "Kewell", state: "Victoria", zip:null, phone: "+61 4 9928 3629"},
    ]

    return (
        <div className={bodyCSS.bodyWrapper}>
            <Intro headline={introHeadline} paragraph={introParagraph} pictureArr={picArray} btn={false} headlineSize="sm" />
            <Commitment />
            <Quality />
            <div className={bodyCSS.mainHeadContainer}>
            <h5 className={bodyCSS.mainHead}>Our headquarters</h5> 
            </div>
            
            <div className={bodyCSS.headquarterContainer}>
            
                {headquartersArr.map((item) => {
                    console.log(item)
                    return (
                            <Headquarters 
                                Icon={item.pic}
                                headline={item.headline} 
                                street={item.street} 
                                city={item.city} 
                                state={item.state} 
                                zip={item.zip} 
                                phone={item.phone} />

                    ) 
                })}  
            </div>
            
            <div className={bodyCSS.push}></div>
            <Footer />
            
        </div>
    )
}

export default About;