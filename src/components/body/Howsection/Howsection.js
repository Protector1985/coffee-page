import React from 'react'
import {Button} from 'reactstrap'

import howCSS from './how.module.css'
import Howbox from './Howbox/Howbox'

function Howsection({theme}) {

    const [steps, setSteps] = React.useState([
        {step: "01", headline: "Pick your coffee", paragraph: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."},
        {step: "02", headline: "Choose the frequency", paragraph: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."},
        {step: "03", headline: "Receive and enjoy!", paragraph: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."}
    ])

    function returnHeadClassName(themeDef) {
        switch(themeDef) {
            case "dark": 
                return howCSS.headlineMainDark
            case "light":
                return howCSS.headlineMainLight
        }
    }

    function returnContainerClassName(themeDef) {
        switch(themeDef) {
            case "dark": 
                return howCSS.containerDark
            case "light":
                return howCSS.containerLight
        }
    }

    return (
        <div>
            <h4 className={returnHeadClassName(theme)}>How it works</h4>
            <div className={returnContainerClassName(theme)}>
                {steps.map((step, index) => {
                    return <Howbox key={step.headline} index={index} step={step.step} headline={step.headline} paragraph={step.paragraph} theme={theme} />
                })} 
            </div>
        </div>
    )
}

export default Howsection;