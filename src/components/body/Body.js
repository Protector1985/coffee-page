import React from 'react';

import Intro from './Intro/Intro'
import bodyCSS from './body.module.css'

function Body() {
    return (
        <div className={bodyCSS.bodyWrapper}>
            <Intro />
        </div>
    )
}

export default Body;