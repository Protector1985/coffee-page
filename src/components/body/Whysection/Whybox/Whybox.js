import React from 'react'
import whyboxCSS from './whybox.module.css'

function Whybox(props) {
    
    
    const headline = props.headline;
    const paragraph = props.paragraph;
    const Icon = props.icon

    

    
    

    return (
        <div className={whyboxCSS.container}>
            <Icon className={whyboxCSS.icon} />
            <h4 className={whyboxCSS.headline}>{headline}</h4>
            <p className={whyboxCSS.paragraph}>{paragraph}</p>
        </div>
    )
}

export default Whybox