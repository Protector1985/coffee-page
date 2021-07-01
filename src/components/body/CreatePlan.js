import React from 'react'

import Intro from './Intro/Intro'
import Howsection from './Howsection/Howsection'
import Footer from '../footer/Footer'
import bodyCSS from './body.module.css'
import {Button} from 'reactstrap'
import * as dataArray from './datasheet'


import ChoiceButton from './ChoiceButton/ChoiceButton'


function CreatePlan(props) {
    const [how, setHow] = React.useState(dataArray.coffeePreferenceData);
    const [type, setType] = React.useState(dataArray.coffeeTypeData);
    const [amount, setAmount] = React.useState(dataArray.coffeeAmountData);
    const [grind, setGrind] = React.useState(dataArray.coffeeGrindData);
    const [frequency, setFrequency] = React.useState(dataArray.coffeeIntervalData);
    const [turnedOnButton, setTurnOn] = React.useState({clickedElement: "_____", bodyTxt: "",  flag:""})
    const [endStatementHow, setEndStatementHow] = React.useState("_____")
    const [endStatementType, setEndStatementType] = React.useState("_____")
    const [endStatementAmount, setEndStatementAmount] = React.useState("_____")
    const [endStatementGrind, setEndStatementGrind] = React.useState("_____")
    const [endStatementFrequency, setEndStatementFrequency] = React.useState("_____")
   

    
    const headline = "Create a plan";
    const paragraph = "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
   

    function returnButton() {
        if(endStatementHow === "_____" || endStatementType === "_____" || endStatementAmount === "_____" || endStatementGrind === "_____" || endStatementFrequency === "_____" ) {
            return <Button disabled className={bodyCSS.planButtonDeactivated} variant="custom">Create your plan</Button> 
        } else if( endStatementHow !== "_____" && endStatementType !== "_____" && endStatementAmount !== "_____" && endStatementGrind !== "_____" && endStatementFrequency !== "_____") {
           return <Button className={bodyCSS.planButtonActive} variant="custom">Create your plan</Button> 
        }
    }
    

    const listArray = [
        {index: "01", desc: "Preferences"},
        {index: "02", desc: "Bean Type"},
        {index: "03", desc: "Quantity"},
        {index: "04", desc: "Grind Options"},
        {index: "05", desc: "Deliveries"},
    ]

    function evalCoffeChoice(objArr, stateHook) {
    
        for(let i = 0 ; i < how.length ; i ++) {
            if(objArr[i].headline === turnedOnButton.clickedElement) {
                
                const dataCopy = [
                    ...objArr,
                ]
                
                switch(i) {
                    case 0: 
                        dataCopy[0].active = !objArr[0].active
                        if(dataCopy[0].active === true) {
                            dataCopy[1].active = false
                            dataCopy[2].active = false
                        }
                        break;
                    case 1:
                        dataCopy[1].active = !objArr[1].active
                        if(dataCopy[1].active === true) {
                            dataCopy[0].active = false
                            dataCopy[2].active = false
                        }
                        break;
                    case 2: 
                        dataCopy[2].active = !objArr[2].active
                        if(dataCopy[2].active === true) {
                            dataCopy[1].active = false
                            dataCopy[0].active = false
                        }
                        break;
                } 
                stateHook(() => dataCopy)
            
        }
    }

    }

    
    
    React.useEffect(() => {
        console.log(turnedOnButton)
        
        if (turnedOnButton.clickedElement === "Capsule" || turnedOnButton.clickedElement === "Espresso") {
            evalCoffeChoice(how, setHow)
            turnedOnButton.active === false ? setEndStatementHow(turnedOnButton.clickedElement) : setEndStatementHow("_____")
        } else if (turnedOnButton.clickedElement === "Single Origin" || turnedOnButton.clickedElement === "Decaf" || turnedOnButton.clickedElement === "Blended") {
            evalCoffeChoice(type, setType)
            turnedOnButton.active === false ? setEndStatementType(turnedOnButton.clickedElement) : setEndStatementType("_____")
        } else if (turnedOnButton.clickedElement === "250g" || turnedOnButton.clickedElement === "500g" || turnedOnButton.clickedElement === "1000g") {
            evalCoffeChoice(amount, setAmount)
            turnedOnButton.active === false ? setEndStatementAmount(turnedOnButton.clickedElement) : setEndStatementAmount("_____")
        } else if (turnedOnButton.clickedElement === "Wholebean" || turnedOnButton.clickedElement === "Cafetiére") {
            evalCoffeChoice(grind, setGrind)
            turnedOnButton.active === false ? setEndStatementGrind(turnedOnButton.clickedElement) : setEndStatementGrind("_____")
        } else if (turnedOnButton.clickedElement === "Every week" || turnedOnButton.clickedElement === "Every 2 weeks" || turnedOnButton.clickedElement === "Every month") {
            evalCoffeChoice(frequency, setFrequency)
            turnedOnButton.active === false ? setEndStatementFrequency(turnedOnButton.clickedElement) : setEndStatementFrequency("_____")
        } else if (turnedOnButton.clickedElement === "Filter" && turnedOnButton.bodyTxt === "For pour over or drip methods like Aeropress, Chemex, and V60") {
            evalCoffeChoice(how, setHow)
            turnedOnButton.active === false ? setEndStatementHow(turnedOnButton.clickedElement) : setEndStatementHow("_____")
        } else if (turnedOnButton.clickedElement === "Filter" && turnedOnButton.bodyTxt === "For drip or pour-over coffee methods such as V60 or Aeropress") {
            evalCoffeChoice(grind, setGrind)
            turnedOnButton.active === false ? setEndStatementGrind(turnedOnButton.clickedElement) : setEndStatementGrind("_____")
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
                        <h4 className={bodyCSS.btnGroupHeadline}>How do you drink your coffee?</h4>
                            <div  className={bodyCSS.drinkChoice}>
                                    {how.map((dataObject, ind) => {
                                        return <ChoiceButton setTurnOn={setTurnOn} buttonSet="0" headline={dataObject.headline} text={dataObject.description} index={ind} active={dataObject.active}/>
                                    })}
                            </div>
                            
                            <h4 className={bodyCSS.btnGroupHeadline} >What type of coffee?</h4>
                            <div className={bodyCSS.typeChoice}>
                                    {type.map((dataObject, ind)=> {
                                        return <ChoiceButton setTurnOn={setTurnOn} headline={dataObject.headline} text={dataObject.description} index={ind} active={dataObject.active}/>
                                    })}
                            </div>
                            <h4 className={bodyCSS.btnGroupHeadline}>How much would you like?</h4>
                            <div className={bodyCSS.amountChoice}>
                            
                                {amount.map((dataObject, ind)=> {
                                    return <ChoiceButton setTurnOn={setTurnOn} headline={dataObject.headline} text={dataObject.description}  index={ind} active={dataObject.active}/>
                                })}
                            </div>
                            <h4 className={bodyCSS.btnGroupHeadline} >Want us to grind them?</h4>
                            <div className={bodyCSS.grindChoice}>
                                
                                    {grind.map((dataObject, ind)=> {
                                        return <ChoiceButton setTurnOn={setTurnOn} headline={dataObject.headline} text={dataObject.description}  index={ind} active={dataObject.active}/>
                                    })}
                            </div>
                            <h4 className={bodyCSS.btnGroupHeadline}>How often should we deliver?</h4>
                            <div className={bodyCSS.frequencyChoice}>
                                
                                    {frequency.map((dataObject, ind)=> {
                                        return <ChoiceButton setTurnOn={setTurnOn} headline={dataObject.headline} text={dataObject.description} index={ind} active={dataObject.active}/>
                                    })}
                            </div>

                            <div className={bodyCSS.endStatementContainer}>
                                <p className={bodyCSS.orderSummary}>ORDER SUMMARY</p> 
                                <h4 className={bodyCSS.orderSummaryText}>"I drink my coffe with using  <span className={bodyCSS.placeholder}>{endStatementHow}</span> with a <span className={bodyCSS.placeholder}>{endStatementType}</span> type of bean. <span className={bodyCSS.placeholder}>{endStatementAmount}</span> ground ala <span className={bodyCSS.placeholder}>{endStatementGrind}</span> sent to me <span className={bodyCSS.placeholder}>{endStatementFrequency}</span>"</h4>
                            </div>
                                {returnButton()}     
                                <div className={bodyCSS.push}></div>  
                        </div>
                          
                    </div>
                              
                <Footer />
        </div>
    )
}

export default CreatePlan;
