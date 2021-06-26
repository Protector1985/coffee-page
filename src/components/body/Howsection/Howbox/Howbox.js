import React from 'react';
import howboxCSS from './howbox.module.css'

function Howbox(props) {
    const step = props.step;
    const headline = props.headline;
    const paragraph = props.paragraph;
    const index = props.index;
    const theme = props.theme;
    
    function returnHeadlineClassName(themeDefinition) {
        switch(themeDefinition) {
            case "dark":
                return howboxCSS.headlineDark;
            case "light":
                return howboxCSS.headlineLight;
        }
    }

    function returnParagraphClassName(themeDefinition) {
        switch(themeDefinition) {
            case "dark":
                return howboxCSS.paragraphDark;
            case "light":
                return howboxCSS.paragraphLight;
        }
    }

    function returnCircleClassName(themeDefinition) {
        switch(themeDefinition) {
            case "dark":
                return howboxCSS.circleDark;
            case "light":
                return howboxCSS.circleLight;
        }
    }

    function returnLineClassName(themeDefinition) {
        switch(themeDefinition) {
            case "dark":
                return howboxCSS.lineDark;
            case "light":
                return howboxCSS.lineLight;
        }
    }

    function returnContainerClassName(themeDefinition) {
        switch(themeDefinition) {
            case "dark":
                return howboxCSS.containerDark;
            case "light":
                return howboxCSS.containerLight;
        }
    }
    
    return (
         
            <div className={returnContainerClassName(theme)}>
                <span className={returnCircleClassName(theme)}></span>
                {index <= 1 ?<hr className={returnLineClassName(theme)} /> : null}
                <h2 className={howboxCSS.step}>{step}</h2>
                <h4 className={returnHeadlineClassName(theme)}>{headline}</h4>
                <p className={returnParagraphClassName(theme)}>{paragraph}</p>
            </div>
        
    )
}

export default Howbox;