import { logDOM } from '@testing-library/react'
import React, {Fragment} from 'react'
import ReactDOM from 'react-dom';

import Burgersymbol from './Mobileview/Menu/Burgersymbol'
import {ReactComponent as Logo} from '../../assets/shared/desktop/logo.svg'
import headerCSS from './header.module.css'
import useDimensions from '../utility/sizing/useDimensions'

function Header() {
    const svgRef = React.useRef()
    const burgerRef = React.useRef()
    const {width, height} = useDimensions()
    
   
    React.useEffect(() => {
        
        
        if(width <= 414 ) {
            svgRef.current.setAttribute('viewBox',"248 0 42 42")
            svgRef.current.setAttribute('width', "180")
        } else if(width > 414 && width <= 768 ) {
            svgRef.current.setAttribute('width',"240")
            svgRef.current.setAttribute('viewBox',"110 0 30 30")
        }  
    },[width])
    

    return (
        <div  className={headerCSS.head}>
            <Logo ref={svgRef} className={headerCSS.logo} />
            <Burgersymbol className={headerCSS.burgerSymbol} />
        </div>
    )
}

export default Header