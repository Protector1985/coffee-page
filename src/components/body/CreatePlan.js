import React from 'react'

import Intro from './Intro/Intro'
import Howsection from './Howsection/Howsection'
import Footer from '../footer/Footer'
import bodyCSS from './body.module.css'
import useDimensions from '../utility/sizing/useDimensions'
import {Button, Modal, ModalHeader, ModalBody,} from 'reactstrap'
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
    const [modal, setModal] = React.useState(false);
    const [price, setPrice] = React.useState({
        how: 0,
        type: 0,
        amount: 0,
        grind: 0,
        frequency: 0,
        multiplyer: 0,
    })
    const {width, heigth} = useDimensions();

    


    const toggle = () => setModal(!modal)
    
    const headline = "Create a plan";
    const paragraph = "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
   

    function returnButton() {
        if(endStatementHow === "_____" || endStatementType === "_____" || endStatementAmount === "_____" || endStatementGrind === "_____" || endStatementFrequency === "_____" ) {
            return <Button disabled className={bodyCSS.planButtonDeactivated} variant="custom">Create your plan</Button> 
        } else if( endStatementHow !== "_____" && endStatementType !== "_____" && endStatementAmount !== "_____" && endStatementGrind !== "_____" && endStatementFrequency !== "_____") {
           return <Button onClick={toggle} className={bodyCSS.planButtonActive} variant="custom">Create your plan</Button> 
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

    console.log(price)
    
    React.useEffect(() => {
        console.log(turnedOnButton)
        
        if (turnedOnButton.clickedElement === "Capsule" || turnedOnButton.clickedElement === "Espresso") {
            evalCoffeChoice(how, setHow)
            setPrice(() => ({
                ...price,
                how: turnedOnButton.price
            }))
            turnedOnButton.active === false ? setEndStatementHow(turnedOnButton.clickedElement) : setEndStatementHow("_____")
        } else if (turnedOnButton.clickedElement === "Single Origin" || turnedOnButton.clickedElement === "Decaf" || turnedOnButton.clickedElement === "Blended") {
            evalCoffeChoice(type, setType)
            setPrice(() => ({
                ...price,
                type: turnedOnButton.price
            }))
            turnedOnButton.active === false ? setEndStatementType(turnedOnButton.clickedElement) : setEndStatementType("_____")
        } else if (turnedOnButton.clickedElement === "250g" || turnedOnButton.clickedElement === "500g" || turnedOnButton.clickedElement === "1000g") {
            evalCoffeChoice(amount, setAmount)
            setPrice(() => ({
                ...price,
                amount: turnedOnButton.price
            }))
            turnedOnButton.active === false ? setEndStatementAmount(turnedOnButton.clickedElement) : setEndStatementAmount("_____")
        } else if (turnedOnButton.clickedElement === "Wholebean" || turnedOnButton.clickedElement === "Cafetiére") {
            evalCoffeChoice(grind, setGrind)
            setPrice(() => ({
                ...price,
                grind: turnedOnButton.price
            }))
            turnedOnButton.active === false ? setEndStatementGrind(turnedOnButton.clickedElement) : setEndStatementGrind("_____")
        } else if (turnedOnButton.clickedElement === "Every week" || turnedOnButton.clickedElement === "Every 2 weeks" || turnedOnButton.clickedElement === "Every month") {
            evalCoffeChoice(frequency, setFrequency)
                    if(turnedOnButton.clickedElement === "Every week") {
                        setPrice(() => ({
                            ...price,
                            frequency: turnedOnButton.price,
                            multiplyer: 4
                        }))
                    } else if(turnedOnButton.clickedElement === "Every 2 weeks") {
                        setPrice(() => ({
                            ...price,
                            frequency: turnedOnButton.price,
                            multiplyer: 2,
                        }))
                    } else if(turnedOnButton.clickedElement === "Every month") {
                        setPrice(() => ({
                            ...price,
                            frequency: turnedOnButton.price,
                            multiplyer: 1,
                        }))
                    }
            turnedOnButton.active === false ? setEndStatementFrequency(turnedOnButton.clickedElement) : setEndStatementFrequency("_____")
        } else if (turnedOnButton.clickedElement === "Filter" && turnedOnButton.bodyTxt === "For pour over or drip methods like Aeropress, Chemex, and V60") {
            evalCoffeChoice(how, setHow)
            setPrice(() => ({
                ...price,
                how: turnedOnButton.price
            }))
            turnedOnButton.active === false ? setEndStatementHow(turnedOnButton.clickedElement) : setEndStatementHow("_____")
        } else if (turnedOnButton.clickedElement === "Filter" && turnedOnButton.bodyTxt === "For drip or pour-over coffee methods such as V60 or Aeropress") {
            evalCoffeChoice(grind, setGrind)
            setPrice(() => ({
                ...price,
                grind: turnedOnButton.price
            }))
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
                                        return <ChoiceButton setTurnOn={setTurnOn} buttonSet="0" headline={dataObject.headline} text={dataObject.description} index={ind} active={dataObject.active} price={dataObject.price}/>
                                    })}
                            </div>
                            
                            <h4 className={bodyCSS.btnGroupHeadline} >What type of coffee?</h4>
                            <div className={bodyCSS.typeChoice}>
                                    {type.map((dataObject, ind)=> {
                                        return <ChoiceButton setTurnOn={setTurnOn} headline={dataObject.headline} text={dataObject.description} index={ind} active={dataObject.active} price={dataObject.price}/>
                                    })}
                            </div>
                            <h4 className={bodyCSS.btnGroupHeadline}>How much would you like?</h4>
                            <div className={bodyCSS.amountChoice}>
                            
                                {amount.map((dataObject, ind)=> {
                                    return <ChoiceButton setTurnOn={setTurnOn} headline={dataObject.headline} text={dataObject.description}  index={ind} active={dataObject.active} price={dataObject.price}/>
                                })}
                            </div>
                            <h4 className={bodyCSS.btnGroupHeadline} >Want us to grind them?</h4>
                            <div className={bodyCSS.grindChoice}>
                                
                                    {grind.map((dataObject, ind)=> {
                                        return <ChoiceButton setTurnOn={setTurnOn} headline={dataObject.headline} text={dataObject.description}  index={ind} active={dataObject.active} price={dataObject.price}/>
                                    })}
                            </div>
                            <h4 className={bodyCSS.btnGroupHeadline}>How often should we deliver?</h4>
                            <div className={bodyCSS.frequencyChoice}>
                                
                                    {frequency.map((dataObject, ind)=> {
                                        return <ChoiceButton setTurnOn={setTurnOn} headline={dataObject.headline} text={dataObject.description} index={ind} active={dataObject.active} price={dataObject.price}/>
                                    })}
                            </div>

                            <div className={bodyCSS.endStatementContainer}>
                                <p className={bodyCSS.orderSummary}>ORDER SUMMARY</p> 
                                <h4 className={bodyCSS.orderSummaryText}>"I drink my coffee with using  <span className={bodyCSS.placeholder}>{endStatementHow}</span> with a <span className={bodyCSS.placeholder}>{endStatementType}</span> type of bean. <span className={bodyCSS.placeholder}>{endStatementAmount}</span> ground ala <span className={bodyCSS.placeholder}>{endStatementGrind}</span> sent to me <span className={bodyCSS.placeholder}>{endStatementFrequency}</span>"</h4>
                            </div>
                                {returnButton()} 
                                <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader className={bodyCSS.modalHeader} toggle={toggle}>Order Summary</ModalHeader>
                                        <ModalBody className={bodyCSS.modalBody}>
                                            <h4 className={bodyCSS.orderSummaryTextModal}>"I drink my coffee with using  <span className={bodyCSS.placeholder}>{endStatementHow}</span> with a <span className={bodyCSS.placeholder}>{endStatementType}</span> type of bean. <span className={bodyCSS.placeholder}>{endStatementAmount}</span> ground ala <span className={bodyCSS.placeholder}>{endStatementGrind}</span> sent to me <span className={bodyCSS.placeholder}>{endStatementFrequency}</span>"</h4>
                                            <p className={bodyCSS.orderSummaryDisclaimer}>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>
                                         {width > 768 ? <div className={bodyCSS.buttonDivMax}> <span className={bodyCSS.valueHere}><p className={bodyCSS.valueText}>{`$${(((price.how + price.type + price.grind + price.frequency) * price.amount) * price.multiplyer).toFixed(2)}/mo`}</p></span>  <Button className={bodyCSS.checkoutButton}>Checkout</Button>  </div>: <Button className={bodyCSS.checkoutButton}>{`Checkout - $${(((price.how + price.type + price.grind + price.frequency) * price.amount) * price.multiplyer).toFixed(2)}`}</Button> }   
                                        </ModalBody>
                                </Modal>    
                                <div className={bodyCSS.push}></div>  
                        </div>
                          
                    </div>
                              
                <Footer />
        </div>
    )
}

export default CreatePlan;
