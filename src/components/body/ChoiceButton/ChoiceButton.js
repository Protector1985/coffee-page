import React from 'react'
import choiceCSS from './ChoiceButton.module.css'

function ChoiceButton({headline, text, setTurnOn, active}) {
    const choiceNode = React.useRef();

    function returnActiveStyling() {
        switch(active) {
            case true:
                return choiceCSS.containerActive
            case false:
                return choiceCSS.containerDeactivated
        }
    }

    function handleClick(e) {
        e.preventDefault()
        const clickedElement = choiceNode.current.children[0].innerText
        let rand1 = Math.floor(Math.random() * 10000)
        rand1 = rand1.toString()
        setTurnOn(()=> ({clickedElement: clickedElement, flag: rand1 }))
    }
    

    
    return(
        <div ref={choiceNode} onClick={(e) => handleClick(e)} className={returnActiveStyling()} >
            <h4 className={choiceCSS.headline}>{headline}</h4>
            <p className={choiceCSS.paragraph}>{text}</p>

        </div>
    )
}

export default ChoiceButton;