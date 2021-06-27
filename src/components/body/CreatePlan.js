import React from 'react'

import Intro from './Intro/Intro'
import Howsection from './Howsection/Howsection'
import Footer from '../footer/Footer'
import bodyCSS from './body.module.css'
import * as dataArray from './datasheet'


import ChoiceButton from './ChoiceButton/ChoiceButton'


function CreatePlan(props) {
    const [how, setHow] = React.useState(dataArray.coffeePreferenceData);
    const [type, setType] = React.useState(dataArray.coffeeTypeData);
    const [amount, setAmount] = React.useState(dataArray.coffeeAmountData);
    const [grind, setGrind] = React.useState(dataArray.coffeeGrindData);
    const [frequency, setFrequency] = React.useState(dataArray.coffeeIntervalData);
    const [turnedOnButton, setTurnOn] = React.useState({clickedElement: "", flag:""})
    
   

    
    const headline = "Create a plan";
    const paragraph = "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
   
    

    const listArray = [
        {index: "01", desc: "Preferences"},
        {index: "02", desc: "Bean Type"},
        {index: "03", desc: "Quantity"},
        {index: "04", desc: "Grind Options"},
        {index: "05", desc: "Deliveries"},
    ]

    
    React.useEffect(() => {
        
        if(turnedOnButton.clickedElement === "Capsule" || turnedOnButton.clickedElement === "Filter" || turnedOnButton.clickedElement === "Espresso") {
            for(let i = 0 ; i < how.length ; i ++) {
                if(how[i].headline === turnedOnButton.clickedElement) {
                    const dataCopy = [
                        ...how,
                    ]
                    switch(i) {
                        case 0: 
                            dataCopy[0].active = !how[0].active
                            if(dataCopy[0].active === true) {
                                dataCopy[1].active = false
                                dataCopy[2].active = false
                            }
                            break;
                        case 1:
                            dataCopy[1].active = !how[1].active
                            if(dataCopy[1].active === true) {
                                dataCopy[0].active = false
                                dataCopy[2].active = false
                            }
                            break;
                        case 2: 
                            dataCopy[2].active = !how[2].active
                            if(dataCopy[2].active === true) {
                                dataCopy[1].active = false
                                dataCopy[0].active = false
                            }
                            break;
                    }
                    setHow(() => dataCopy)
                }
            }
        }
    }, [turnedOnButton.flag])
        
    
    
    

    return(
        <div className={bodyCSS.bodyWrapper}>
             <Intro headline={headline} paragraph={paragraph} pictureArr={dataArray.picArray} btn={false} headlineSize="lg" />
             <Howsection theme="dark"/>
                    <div className={bodyCSS.choiceMasterContainer}>
                   <div className={bodyCSS.choiceIndex}>
                        <ul>
                            {listArray.map((item) => {
                                return (
                                    <div>
                                        <li>{`${item.index} ${item.desc}`}</li>
                                        <hr className={bodyCSS.dividerLine}/>
                                    </div>
                                    

                                ) 
                            })}
                        </ul>

                    </div>
                    
                    <div className={bodyCSS.choiceButtonContainer}>
                        <h4>How do you drink your coffee?</h4>
                            <div  className={bodyCSS.drinkChoice}>
                                    {how.map((dataObject, ind) => {
                                        return <ChoiceButton setTurnOn={setTurnOn} buttonSet="0" headline={dataObject.headline} text={dataObject.description} index={ind} active={dataObject.active}/>
                                    })}
                            </div>
                            
                            <h4>What type of coffee?</h4>
                            <div className={bodyCSS.typeChoice}>
                                    {type.map((dataObject, ind)=> {
                                        return <ChoiceButton headline={dataObject.headline} text={dataObject.description} index={ind} active={dataObject.active}/>
                                    })}
                            </div>
                            <h4>How much would you like?</h4>
                            <div className={bodyCSS.amountChoice}>
                            
                                {amount.map((dataObject, ind)=> {
                                    return <ChoiceButton  headline={dataObject.headline} text={dataObject.description}  index={ind} active={dataObject.active}/>
                                })}
                            </div>
                            <h4>Want us to grind them?</h4>
                            <div className={bodyCSS.grindChoice}>
                                
                                    {grind.map((dataObject, ind)=> {
                                        return <ChoiceButton headline={dataObject.headline} text={dataObject.description}  index={ind} active={dataObject.active}/>
                                    })}
                            </div>
                            <h4>How often should we deliver?</h4>
                            <div className={bodyCSS.frequencyChoice}>
                                
                                    {frequency.map((dataObject, ind)=> {
                                        return <ChoiceButton headline={dataObject.headline} text={dataObject.description} index={ind} active={dataObject.active}/>
                                    })}
                            </div>

                            <div className={bodyCSS.endStatementContainer}></div>
                            
                            
                        </div>
                    </div>
                <div className={bodyCSS.push}></div>
                <Footer />
        </div>
    )
}

export default CreatePlan;
