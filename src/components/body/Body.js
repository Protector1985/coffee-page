import React from 'react';

import Intro from './Intro/Intro'
import Collection from './Collection/Collection'
import bodyCSS from './body.module.css'

function Body() {
    return (
        <div className={bodyCSS.bodyWrapper}>
            <Intro />
            <Collection />   
        </div>
    )
}

export default Body;