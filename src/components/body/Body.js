import React from 'react';

import Intro from './Intro/Intro'
import Collection from './Collection/Collection'
import Whysection from './Whysection/Whysection'
import bodyCSS from './body.module.css'
import Howsection from './Howsection/Howsection'

function Body() {
    return (
        <div className={bodyCSS.bodyWrapper}>
            <Intro />
            <Collection />
            <Whysection />   
            <Howsection />
        </div>
    )
}

export default Body;