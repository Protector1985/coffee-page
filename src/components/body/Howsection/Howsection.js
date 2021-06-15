import React from 'react'
import {Button} from 'reactstrap'

import howCSS from './how.module.css'
import Howbox from './Howbox/Howbox'

function Howsection() {
    const [steps, setSteps] = React.useState([
        {step: "01", headline: "Pick your coffee", paragraph: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."},
        {step: "02", headline: "Choose the frequency", paragraph: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."},
        {step: "03", headline: "Receive and enjoy!", paragraph: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."}
    ])

    return (
        <div>
            <h4 className={howCSS.headlineMain}>How it works</h4>
            <div className={howCSS.container}>
                {steps.map((step, index) => {
                    return <Howbox index={index} step={step.step} headline={step.headline} paragraph={step.paragraph} />
                })} 
            </div>
        </div>
    )
}

export default Howsection;