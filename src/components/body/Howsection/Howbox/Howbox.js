import React from 'react';
import howboxCSS from './howbox.module.css'

function Howbox(props) {
    const step = props.step;
    const headline = props.headline;
    const paragraph = props.paragraph
    const index = props.index
    return (
        
            
            <div className={howboxCSS.container}>
                <span className={howboxCSS.circle}></span>
                {index <= 1 ?<hr className={howboxCSS.line} /> : null}
                <h2 className={howboxCSS.step}>{step}</h2>
                <h4 className={howboxCSS.headline}>{headline}</h4>
                <p className={howboxCSS.paragraph}>{paragraph}</p>
            </div>
        
    )
}

export default Howbox;