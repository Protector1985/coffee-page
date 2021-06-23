import React from 'react';
import introCSS from './intro.module.css'
import {Button} from 'reactstrap'

import useDimensions from '../../utility/sizing/useDimensions'

function Intro({pictureArr, headline, paragraph, btn, headlineSize}) {
    
    const {width, height} = useDimensions()
    
    function getImage(width) {
        for(let i = 0 ;i < pictureArr.length ; i ++) {
            if(width < 768) {
                if(pictureArr[i].type === "MOBILE") {
                    return <img className={introCSS.picture} src={pictureArr[i].pic} alt={`Coffee Press ${pictureArr[i].type}`} /> 
                }
                
            } else if (width < 1024) {
                if(pictureArr[i].type === "TABLET") {
                    return <img className={introCSS.picture} src={pictureArr[i].pic} alt={`Coffee Press ${pictureArr[i].type}`} /> 
                }
            } else {
                if(pictureArr[i].type === "DESKTOP") {
                    return <img className={introCSS.picture} src={pictureArr[i].pic} alt={`Coffee Press ${pictureArr[i].type}`} /> 
                }
            }

        }
    }

    function returnHeadline(size) {
        if(size === "lg") {
            return <h1 className={introCSS.headlineLg}>{headline}</h1>
        } else if (size === "sm") {
            return <h1 className={introCSS.headlineSm}>{headline}</h1>
        }

    }


    return (
     
            <div className={introCSS.pictureContainer}>
            {getImage(width)}
                <div className={introCSS.text}>
                   {returnHeadline(headlineSize)}
                    <p className={introCSS.paragraph}>{paragraph}</p>
                {btn ? <Button className={introCSS.planButton} variant="custom">Create your plan</Button> : null }
                </div>
       
            
            
            
        
        </div>

    ) 
}

export default Intro;