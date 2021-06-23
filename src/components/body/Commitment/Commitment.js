import React from 'react'

import commitmentCSS from './commitment.module.css'
import mobilePic from '../../../assets/about/mobile/image-commitment.jpg'
import tabletPic from '../../../assets/about/tablet/image-commitment.jpg'
import desktopPic from '../../../assets/about/desktop/image-commitment.jpg'

import useDimensions from '../../utility/sizing/useDimensions'


const Headline = () => {
    return (
        <h4 className={commitmentCSS.headline}>Our commitment</h4>
    )
}

const Paragraph = () => {
    return (
        <p className={commitmentCSS.paragraph}>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
    )
}

function Commitment() {
    const {width, height} = useDimensions();
    
    function getImage(width) {
            if(width < 768) {
                return <img className={commitmentCSS.picture} src={mobilePic} alt={`Coffee Commitment Mobile`} /> 
            } else if (width < 1024) {
                return <img className={commitmentCSS.picture} src={tabletPic} alt={`Coffee Commitment Tablet`} /> 
            } else {
                return <img className={commitmentCSS.picture} src={desktopPic} alt={`Coffee Commitment Desktop`} /> 
            }  
    }

    return (
        <div className={commitmentCSS.container}>
            {getImage(width)}
            <div className={commitmentCSS.textContainer}>
                <Headline />
                <Paragraph />

            </div>
               

        </div>
    )
}

export default Commitment;