import React from 'react'
import choiceCSS from './ChoiceButton.module.css'

function ChoiceButton({headline, text}) {
    return(
        <div className={choiceCSS.container}>
            <h4>{headline}</h4>
            <p>{text}</p>

        </div>
    )
}

export default ChoiceButton;