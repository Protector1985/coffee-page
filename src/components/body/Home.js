import React from 'react';

import Intro from './Intro/Intro'
import Collection from './Collection/Collection'
import Whysection from './Whysection/Whysection'
import bodyCSS from './body.module.css'
import Howsection from './Howsection/Howsection'
import Footer from '../footer/Footer'
import CoffeePressPictureMobile from '../../assets/home/mobile/image-hero-coffeepress.jpg'
import CoffeePressPictureTablet from '../../assets/home/tablet/image-hero-coffeepress.jpg'
import CoffeePressPictureDesktop from '../../assets/home/desktop/image-hero-coffeepress.jpg'

function Home() {

    const introHeadline= "Great coffee made simple."
    const introParagraph = "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."

    const picArray = [
        {type: "DESKTOP", pic: CoffeePressPictureDesktop },
        {type: "TABLET", pic: CoffeePressPictureTablet },
        {type: "MOBILE", pic: CoffeePressPictureMobile },
    ]
    
    return (
       
            <div className={bodyCSS.bodyWrapper}>
                <Intro headline={introHeadline} paragraph={introParagraph} pictureArr={picArray} btn={true} headlineSize="lg" />
                <Collection />
                <Whysection />   
                <Howsection theme="light" />
                <div className={bodyCSS.push}></div>
                <Footer/>
            </div>
            
    )
}

export default Home;