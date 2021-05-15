import React from 'react'

import {ReactComponent as Symbol} from '../../../../assets/shared/mobile/icon-hamburger.svg'
import burgerCSS from './burger.module.css'

function Burgersymbol(props) {

    return <Symbol className={burgerCSS.symbol} />

    
}

export default Burgersymbol