import React from 'react'

import Intro from './Intro/Intro'
import Howsection from './Howsection/Howsection'
import bodyCSS from './body.module.css'
import * as dataArray from './datasheet'


import ChoiceButton from './ChoiceButton/ChoiceButton'


function CreatePlan(props) {
    
    const headline = "Create a plan";
    const paragraph = "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."

    
    

    return(
        <div className={bodyCSS.bodyWrapper}>
             <Intro headline={headline} paragraph={paragraph} pictureArr={dataArray.picArray} btn={false} headlineSize="lg" />
             <Howsection theme="dark"/>
             <h4>How do you drink your coffee?</h4>
                {dataArray.coffeePreferenceData.map((dataObject) => {
                    return <ChoiceButton headline={dataObject.headline} text={dataObject.description}/>
                })}
             <h4>What type of coffee?</h4>
                {dataArray.coffeeTypeData.map((dataObject)=> {
                    return <ChoiceButton headline={dataObject.headline} text={dataObject.description}/>
                })}
             <h4>How much would you like?</h4>
                 {dataArray.coffeeAmountData.map((dataObject)=> {
                    return <ChoiceButton headline={dataObject.headline} text={dataObject.description}/>
                 })}
             <h4>Want us to grind them?</h4>
                {dataArray.coffeeGrindData.map((dataObject)=> {
                    return <ChoiceButton headline={dataObject.headline} text={dataObject.description}/>
                })}
             <h4>How often should we deliver?</h4>
                {dataArray.coffeeIntervalData.map((dataObject)=> {
                    return <ChoiceButton headline={dataObject.headline} text={dataObject.description}/>
                })}
        </div>
    )
}

export default CreatePlan;
